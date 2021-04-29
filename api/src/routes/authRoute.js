module.exports = app => {
    const auth = require('../../app/controllers/authentication')();

    app.route('/auth/cadastro')
        .post(auth.cadUsuario);

    app.route('/auth')
        .post(auth.logUsuario);
}

