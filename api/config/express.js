//importando modulos
const express = require('express');
const config = require('config');
const bodyParser = require('body-parser');

module.exports = () => {
    //importando express
    const app = express();

    //Setando a variavel global port
    app.set('port', process.env.PORT || config.get('server.port'));

    //colocando os modulos ou middlewares no express
    app.use(bodyParser.json());

    //rotas
    require('../src/routes/authRoute')(app);

    return app;
};