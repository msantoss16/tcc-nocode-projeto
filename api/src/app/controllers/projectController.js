const express = require('express');
const authMiddleare = require('../middlewares/auth');

const router = express.Router();

router.use(authMiddleare);

router.get('/', (req, res) =>{
    res.send({ ok: true, user: req.userId });
})

module.exports = app => app.use('/projects', router);