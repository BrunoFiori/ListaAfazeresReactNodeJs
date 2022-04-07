// moongoose reflete a API do mongo, + facilidade de utilizacao
const mongoose = require('mongoose');
// Forca utilizacao  da API de promisses do proprio NODE, pois a API do mongoose esta depreciada neste quesito
mongoose.Promise = global.Promise;
// module.exports = mongoose.connect('mongodb://localhost:27017')
module.exports = mongoose.connect('mongodb://localhost/todo');