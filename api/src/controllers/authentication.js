const express = require('express');

const authConfig = require('../config/auth');

const User = require('../models/User');

const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');



const router = express.Router();

router.post('/register', async (req, res) => {
    const {email} = req.body;


    try{
        if (await User.findOne({email}))
            return res.status(400).send({ error: 'Usuário já existente'});


        const user = await User.create(req.body);
        
        user.password = undefined;

        return res.send({user});
    } catch (err) {
        return res.status(400).send({ error: 'falha no registro'});
    }
});

router.post('/authenticate', async (req, res) => {
    const { email, password } = req.body;   

    const user = await User.findOne({ email }).select('+password');

    if(!user)
        return res.status(400).send({ error: 'usuário não encontrado' });
    

    if(!await bcrypt.compare(password, user.password))
        return res.status(400).send({error: 'senha invalida' });

        user.password = undefined;

        const token = jwt.sign({ id: user.id }, authConfig.secret,{
            expiresIn: 86400,
        } )


        res.send({ user, token });
});


module.exports = app => app.use('/auth', router);
