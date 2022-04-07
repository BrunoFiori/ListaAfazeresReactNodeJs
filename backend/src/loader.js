// Quando require('./config/server'); for exec, retornar uma instancia de server;
// isto porque em server.js está exportando uma instancia do server [module.exports = server;]
const server = require('./config/server');
require('./config/database');
//passagem de parametros para function construtora
require('./config/routes')(server);