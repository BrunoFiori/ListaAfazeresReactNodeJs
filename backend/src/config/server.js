const port = 3003;
const bodyParser = require('body-parser');
const express = require('express');
const server = express();

//Middlewares 
// Todas as requisiçoes que chegarem ao servidor, logo a url usara o framework bodyParser para tratativa
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.listen(port, () => {console.log(`Backend esta rodando na porta ${port}.`)});