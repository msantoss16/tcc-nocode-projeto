const express = require('express');
const authMiddleare = require('../middlewares/auth');

const Project = require('../models/project');
const Element = require('../models/element');

const router = express.Router();

router.use(authMiddleare);

router.get('/', async(req, res) =>{  
    try {
        const projects = await Project.find().populate(['user', 'elements']);

        return res.send({ projects });

    } catch (error) {
        console.log(error)
        return res.status(400).send({ error: 'Error Loading projects' });
        
    }
});

router.get('/:projectId', async(req, res) => {
    try {
        const project = await Project.findById(req.params.projectId).populate(['user', 'elements']);

        return res.send({ project });

    } catch (error) {
        return res.status(400).send({ error: 'Error Loading project' });
    }
});

router.post('/', async(req, res) => {

    try {
        const {title, subtitle, version, elements} = req.body;
        console.log(elements)

        const project = await Project.create({ title, subtitle, version, user: req.userId });

        await Promise.all(elements.map(async element =>{
            const projectElement = new Element({ ...element, project: project._id});

            await projectElement.save();

            project.elements.push(projectElement);
        }));

        await project.save()

        return res.send({project});
     
    } catch (error) {
        return res.status(400).send({ error: 'Error Creating new project' });
    }
});

router.put('/:projectId', async(req, res) => {
    try {

        const { title, subtitle, version, elements} = req.body;

        const project = await Project.findByIdAndUpdate(req.params.projectId, { 
            title,
            subtitle, 
            version
        }, {new: true });

        project.elements = [];
        await Element.deleteOne({project: project._id})

        await Promise.all(elements.map(async element =>{
            const projectElement = new Element({ ...element, project: project._id});

            await projectElement.save();

            project.elements.push(projectElement);
        }));

        await project.save();

        return res.send();

    } catch (error) {
        console.log(error)
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