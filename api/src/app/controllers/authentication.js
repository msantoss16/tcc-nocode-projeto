const express = require('express');
const authConfig = require('../../config/auth');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authMiddleare = require('../middlewares/auth');
const crypto = require('crypto');
const mailer = require('../../modules/mailer');

const router = express.Router();

function generateToken(params = {}){
     return jwt.sign(params, authConfig.secret,{
        expiresIn: 86400,
    } )
}

router.get('/:userId', async(req, res) =>{  
    try {
        const user = await User.findById(req.params.userId)

        return res.send({ user });

    } catch (error) {
        console.log(error)
        return res.status(400).send({ error: 'Error Loading users' });
        
    }
});

router.post('/register', async (req, res) => {
    const {email} = req.body;

    try{
        if (await User.findOne({email}))
            return res.status(400).send({ error: 'Usuário já existente'});

        const user = await User.create(req.body);
        
        user.password = undefined;

        return res.send({
            user,
            token: generateToken({id: user.id}),
        });
    } catch (err) {
        return res.status(400).send({ error: 'Falha no registro'});
    }
});

router.post('/authenticate', async (req, res) => {
    const { email, password } = req.body;   

    const user = await User.findOne({ email }).select('+password');

    if(!user)
        return res.status(400).send({ error: 'Usuário ou Senha inválidos' });
    

    if(!await bcrypt.compare(password, user.password))
        return res.status(400).send({error: 'Usuário ou Senha inválidos' });

        user.password = undefined;

        res.send({ 
            user,
            token: generateToken({id: user.id}),
        });
});

router.post('/forgot_password', async (req, res) =>{
    const {email} = req.body;

    try {
        const user = await User.findOne({ email });

        if(!user)
        return res.status(400).send({ error: 'Usuário não encontrado' });

        const token = crypto.randomBytes(20).toString('hex');

        const now = new Date();
        now.setHours(now.getHours() + 1);

        await User.findByIdAndUpdate(user.id,{
            '$set': {
            passwordResetToken: token,
            passwordResetExpires: now,
        }
    });

    let site= 'http://127.0.0.1:5501/site/password-recover.html'
    mailer.sendMail({
        to: email,
        from: 'josiasAnemonas@gmail.com',
        subject: 'Recuperação de Senha',
        html:`Olá, ${user.name} acesse o link para redefinir sua senha: <a href=${site}?email=${email}&token=${token}>clique aqui!</a>`
    }, (err) => {
        if (err)
        return res.status(400).send({error: 'Não foi possivel enviar o email de esqueci a senha'});
        return res.send();
    })
          
    }catch (err) {
        console.log(error)        
        res.status(400).send({ error: 'Erro no esqueci a senha, tente novamente'});
    }
});

router.post('/reset_password', async(req, res) => {
    const { email, token, password } = req.body;

    try{
        const user = await User.findOne({ email })
        .select('+passwordResetToken passwordResetExpires');

        if(!user)
        return res.status(400).send({ error: 'Usuário não encontrado' });

        if(token !== user.passwordResetToken)
        return res.status(400).send({ error: 'Token inválido'});
        
        const now = new Date();

        if(now > user.passwordResetExpires)
        return res.status(400).send({error:'Token expirou, gere um novo' });

        user.password = password;

        await user.save();

        res.send();
        
    } catch (err){
        res.status(400).send({ error: 'Não foi possivel resetar a senha, tente novamente'});
        console.log(err);
    }
});

router.use(authMiddleare).post('/change_password/:userId', async(req, res) => {
    const {password, newPassword} = req.body;

    try{
        const user = await User.findById(req.params.userId).select('+password');

        if(!await bcrypt.compare(password, user.password))
        return res.status(400).send({error: 'Senha atual incorreta' });
        user.password = undefined;

        user.password = newPassword;

        await user.save();

        res.send("Sua senha foi alterada");

    } catch (err){
        res.status(400).send({ error: 'Não foi possivel alterar a senha, tente novamente'});
        console.log(err);
    }
});

module.exports = app => app.use('/auth', router);
