const express = require('express');
const session = require('express-session');
const app = express();

app.use(express.static('assets'));

app.set('view engine', 'pug');

app.use(session({
    secret: 'keyboard-cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
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

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

