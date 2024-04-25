import {Router} from 'express';

const api = Router();

api.get('/', (request, response) => {
    response.status(200).send({message: 'Hello, world!'});
});


api.post('/user', (request, response) => {
    let userName = request.body.userName;
});

let exports = {api};
export default exports; 
export {api};