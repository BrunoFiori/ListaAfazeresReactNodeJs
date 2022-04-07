const restful = require('node-restful');
const mongoose = restful.mongoose;

// Campos para os objetos de todo
const todoSchema = new mongoose.Schema({
    description: {type: String, required: true},
    done: {type: Boolean, required: true, default: false},
    createdAt: {type: Date, default: Date.now },
});
//exporta para o sistema inteiro, todos os lugares com required '/todo.js', tera o schema a cima. 
module.exports = restful.model('Todo', todoSchema);