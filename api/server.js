const app = require('./config/express')();
const port = app.get('port');

app.listen(port, () => {
    console.log('Servidor rodando')
});

app.get('/', (req, res) => {
    res.send('Servidor API do Imanager rodando');
});