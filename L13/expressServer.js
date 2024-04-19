// expressServer.js
const express = require('express');
const figlet = require('figlet');
const app = express();

app.all('/', (request, response) => {
    let array = [request.method, request.url];
    response.send(array);
});

function logRequest(request, response, next) {
    send(express.static("filer/kat1.jpg"));
    response.send(request.os);
    console.log('Request logged:', request.method, request.url);
    next();
}

app.use(logRequest);


app.get('/fil/:navn', (request, response) => {
    let array = [request.method, request.url, request.params.navn];
    response.send();
});

app.get('/besked/:besked', (request, response) => {
    figlet.text(request.params.besked, (err, data) => {
        if (err) throw err;
        response.write(data);
        response.end();
    });

});

app.get('/demo', (request, response) => {
    response.send();
});

app.listen(8080, () => console.log('Serveren kører på http://localhost:8080'));