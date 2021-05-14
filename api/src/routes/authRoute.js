module.exports = app => {
    const auth = require('../controllers/authentication')();

    app.route('/auth/cadastro')
        .post(auth.cadUsuario);

    app.route('/auth')
        .post(auth.logUsuario);
}