//Middleware de cors
//Cors é responsavel de permitir que outras aplicações (portas diferentes) acessem os endpoints
module.exports = (req, response, next) => {
    //Resumo: Adicionando cabeçalkhos nas respostas que serão enviadas ao browser, informando que é permitido acessar o serviço

    //Permite que requisiçoes venham de origigens diferente, tendo em vista que nosso frontend será rodado em outra porta
    // caso queira limitar os consumos a aplicações, substituir * pelo endereço da aplicação destino
    response.header('Access-Control-Allow-Origin','*');
    //metodos permitidos para requisiçoes de outras aplicações
    response.header('Access-Control-Allow-Origin', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    response.header('Access-Control-Allow-Origin', 'Origin, X-Requested-With, Content-Type, Accept');
    //Continua fluxo da aplicação (Sem o Next a aplicação ficará travada)
    next();
}