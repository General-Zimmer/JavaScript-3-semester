import {Router} from 'express';


const api = Router();

api.get('/', (request, response) => {
    response.status(200).send({message: 'Hello, world!'});
});


api.post('/user', async (request, response) => {
    let userName = request.body.userName;
    await writeFile({name: userName});
    response.status(200).send(JSON.stringify(data))
});

import fs from 'fs';
async function readFile() {
    let data = fs.readFileSync('users.json', {encoding: 'utf8'});
    return JSON.parse(data);
}

async function writeFile(data) {
    let existingUsers = await readFile();
    existingUsers.push(data);
    await fs.promises.writeFile('users.json', JSON.stringify(existingUsers), {encoding: 'utf8'});
}

let exports = {api};
export default exports; 
export {api};