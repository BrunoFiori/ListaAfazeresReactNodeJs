//Acessa schema do Todo, logo fields que tera no mongo
const Todo = require('./todo' );
//Declara metodos que a sera disponibilizados
Todo.methods(['get','post','put','delete']);
// Quando houver alteracao no banco, retorne o resgistro atualizado (tag new, isso porque por padrao ele n retorna o obj atualizado, mas sim o com as infos antigas...doidera)
// Quando houver alteracao no banco, force a execucao das validacoes definidas no todoSchema (tag runValidators, isso n é um padrao [ QUANDO REALIZA UPDATES, INSERTS SOFRE VALIDACAO ]
// para a API, n sabemos o pq...)
Todo.updateOptions({ new:true, runValidators: true })

// Node resdtfull encapsula a parte relativa ao express (webservice, expõe o servico para a web) como tambem encapsula as chamadas para a API do mongo
// Exporta toda apirest FUNCIONANDO!!!
module.exports =  Todo;