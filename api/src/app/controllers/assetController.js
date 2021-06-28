const express = require('express');
const authMiddleare = require('../middlewares/auth');

const Asset = require('../models/asset');
const Project = require('../models/project');
const fs = require('fs');

const router = express.Router();

router.use(authMiddleare);


router.get('/', async (req, res) => {
    try {
        const assets = await Asset.find();

        return res.send(assets);

    } catch (error) {
        console.log(error)
        return res.status(400).send({ error: 'Error Loading Assets' });

    }
});


router.get('/:assetId/:projectId', async (req, res) => {
    try {
        const assets = await Asset.findById(req.params.assetId);
        const caminho = 'userProject/' + assets.user + '/' + req.params.projectId + '.json';

        fs.readFile(caminho, async function (err, data) {
            if (err) {
                console.log(err)
            } else {
                data = data.toString();
                data = JSON.parse(data);
                data = { appCode: data }
                return res.send({assets, data});
            }
        });


    } catch (error) {
        console.log(error)
        return res.status(400).send({ error: 'Error Loading Asset' });
    };
});


router.post('/:projectId', async (req, res) => {
    try {
        const caminho = 'userProject/' + req.userId + '/' + req.params.projectId + '.json';

        fs.readFile(caminho, async function (err, data) {
            if (err) {
                console.log(err)
            } else {
                data = data.toString();
                data = JSON.parse(data);
                data = { appCode: data }
                const project = await Project.findById(req.params.projectId, data).populate('user');
                const asset = await Asset.create({ ...req.body, project, });
                return res.send(asset);
            }
        })

    } catch (error) {
        console.log(error)
        return res.status(400).send({ error: 'Error Post project' });

    }
});
    

router.put('/:assetId', async (req, res) => {
    try {
        const { title, subtitle, version } = req.body;

        const asset = await Asset.findByIdAndUpdate(req.params.assetId, {
            title,
            subtitle,
            version
        }, { new: true });

        return res.send(asset);

    } catch (error) {
        console.log(error)
        return res.status(400).send({ error: "Error Update Asset" })
    }
});


router.delete('/:assetId', async (req, res) => {
    try {

        await Asset.findByIdAndRemove(req.params.assetId);
        return res.send();

    } catch (error) {
        return res.status(400).send({ error: 'Error Deleting asset' });
    }
});

router.put('/shared/:assetId', async (req, res) => {
    try {
        const asset = await Asset.findOneAndUpdate({_id: req.params.assetId},
         {$addToSet: {"shared": req.userId}
         },{new: true})

        console.log(req.params.assetId)
        return res.send(asset);

    } catch (error) {
        console.log(error)
        return res.status(400).send({ error: "Error Update Asset" })
    }
});

module.exports = app => app.use('/assets', router);