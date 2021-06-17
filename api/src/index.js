const express  = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config/default.json');

const app = express();
app.set('port', process.env.PORT || config.server.port);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

require('./app/controllers/index')(app);

app.listen(app.get('port'), () => {
    console.log(`Servidor rodando na porta ${app.get('port')}`);
});
