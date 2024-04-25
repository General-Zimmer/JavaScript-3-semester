import express from 'express';

const app = express();

app.set('view engine', 'pug');

import {cars} from './cars.js';

app.use('/cars', cars);

app.use((request, response, next) => {
    console.log('Middleware 1');
    next();
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});