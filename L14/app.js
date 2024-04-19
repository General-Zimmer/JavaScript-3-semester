const express = require('express');
const app = express();
const fetch = require('node-fetch');

const pug = require('pug');
app.set('view engine', 'pug');

async function yeet(antal, nationality) {
    if (antal == undefined) {
        antal = 5;
    }
    if (nationality == undefined) {
        nationality = 'dk';
    }

    console.log(typeof(antal));
    console.log(typeof(nationality)); 

    let yeet = await fetch(`https://randomuser.me/api/?results=${antal}&nat=${nationality}`);
    return (await yeet.json()).results;
}

app.get('/', async (request, response) => {
    let result = await yeet();
    let array = [request.method, request.url];

    response.render('frontpage', {result, randomUsers: result});

});

app.get('/pug', (request, response) => {
    const title = 'Min side';
    const name = 'Mads';
    const array = ['Mads', 'Anders', 'Peter'];
    response.render('default', {title, name, array});
})

app.listen(8080, () => console.log('Serveren kører på http://localhost:8080'));