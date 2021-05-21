module.exports = () => {
    const controller = {};

    controller.cadUsuario = async (req, res) => {
        res.send('cadastro');
    };

    controller.logUsuario = async (req, res) => {
        res.send('login');
    };

    return controller;
};