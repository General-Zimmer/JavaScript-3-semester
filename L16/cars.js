import {Router} from 'express';

const cars = Router();

cars.get('/', (request, response) => {
    response.send('Cars');
});

cars.get('/models', (request, response) => {
    response.send('Car models');
});

export {cars};