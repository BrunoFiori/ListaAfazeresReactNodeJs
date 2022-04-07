//express é singleton, quando pega uma referencia apartir do require ele sempre retorna o mesmo
// agora quando é chamado uma instancia do express (server.js linha 4) ele retornar a const server
const express = require('express');

module.exports = (server) => {
    // API Routes
    const router = express.Router();
    // middleware especificos para endereços que começam com '/api', logo sempre que começar com '/api' automaticamente o route sera chamado
    server.use('/api', router);
    //Todo Routes
    const TodoService = require('../api/todo/todoService');
    //metodo register usara todos os metodos declarados no '../api/todo/todoService'
    // logo vc informar que dentro do router (chamado em requisicoes com inicio '/api') que o path /todos contem os metodos ['get','post','put','delete']
    TodoService.register(router,'/todos');
}