
import express from 'express';
import session from 'express-session';

const app = express();

app.use(express.static('assets'));

app.set('view engine', 'pug');

app.use(session({
    secret: 'keyboard-cat',
    resave: true,
    saveUninitialized: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.post('/auth', (req, res) => {
    const { username, password } = req.body;

    if (req.session.authenticated) {
       res.redirect('/');
    } else if (username === 'admin' && password === 'admin') {
        req.session.authenticated = true;
        req.session.username = username;
        res.redirect('/');
    } else {
        res.redirect('https://www.youtube.com/shorts/1Ejyxg-sN5Y');
    }
    res.end();
});

app.get('/logout', (req, res) => {
    req.session.authenticated = false;
    res.redirect('/');
    res.end();
});

app.get('/login', (req, res) => {
  res.render("login", {title: "login WOOOOO", knownUser: req.session.authenticated});
  res.end();
});


app.get('/', (req, res) => {
  res.render("home", {title: "login WOOOOO", knownUser: req.session.authenticated})
  
});

app.get('/secretpage', (req, res) => {
  if (req.session.authenticated) {
    res.render("secret", {name: req.session.username, knownUser: req.session.username});
  } else {
    res.redirect('/login');
  }
});

app.get('/supersecretpage', (req, res) => {
  if (req.session.authenticated) {
    res.render("secret2", {name: req.session.username, knownUser: req.session.username});
  } else {
    res.redirect('/login');
  }
});

app.get('/demo', (req, res) => {
    if (req.session.authenticated) {
        res.send('You are authenticated');
    } else {
        res.send('You are not authenticated');
    }
    res.end();
});

import apis from './api/api.js';
import fs from 'fs';

const api = apis.api;

app.use('/api', api);

api.post('/user', async (request, response) => {
    let userName = request.body.userName;
    await writeFile({name: userName});
    response.status(200).send({status: 200});
});

async function readFile() {
    let data = fs.readFileSync('users.json', {encoding: 'utf8'});
    return JSON.parse(data);
}

async function writeFile(data) {
    let existingUsers = await readFile();
    existingUsers.push(data);
    await fs.promises.writeFile('users.json', JSON.stringify(existingUsers), {encoding: 'utf8'});
}


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

