const express = require('express');
const authMiddleare = require('../middlewares/auth');

const Project = require('../models/project');

const router = express.Router();

router.use(authMiddleare);

router.get('/', async(req, res) =>{
    try {
        const projects = await Project.find().populate('user');

        return res.send({ projects });

    } catch (error) {
        return res.status(400).send({ error: 'Error Loading projects' });
    }
});

router.get('/:projectId', async(req, res) => {
    try {
        const project = await Project.findById(req.params.projectId).populate('user');

        return res.send({ project });

    } catch (error) {
        return res.status(400).send({ error: 'Error Loading project' });
    }
});

router.post('/', async(req, res) => {
    try {
        const project = await Project.create({ ...req.body, user: req.userId });

        return res.send({project});
        
    } catch (error) {
        return res.status(400).send({ error: 'Error Creating new project' });
    }
});

router.put('/:projectId', async(req, res) => {
    try {

        const { title, subtitle, version} = req.body;

        const project = await Project.findByIdAndUpdate(req.params.projectId, { 
            title,
            subtitle, 
            version
        }, {new: true });

        return res.send();

    } catch (error) {
        return res.status(400).send({ error: 'Error Updating project' });
    }
});

router.delete('/:projectId', async(req, res) => {
    try {
        await Project.findByIdAndRemove(req.params.projectId);

        return res.send();

    } catch (error) {
        return res.status(400).send({ error: 'Error Deleting project' });
    }
});

module.exports = app => app.use('/projects', router);