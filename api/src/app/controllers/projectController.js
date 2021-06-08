const express = require('express');
const authMiddleare = require('../middlewares/auth');
const path = require('path');
const fs = require('fs');

const Project = require('../models/project');

const tempJson2 = require('../../../../site/scripts/json/tempJson')

const router = express.Router();

router.use(authMiddleare);

router.get('/', async(req, res) =>{  
    try {
        const projects = await Project.find().populate('user');

        return res.send({ projects });

    } catch (error) {
        console.log(error)
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
        const {title, subtitle, version, pages} = req.body;

        const project = await Project.create({ title, subtitle, version, pages, user: req.userId,});
        
        data = tempJson2.appCode
        const texto = JSON.stringify(data)

        fs.mkdir(path.join
            (__dirname, '..', '..', 'userProject', req.userId), (err) => {
            if (err) {
                return console.error(err);
            }
        });

        fs.appendFile(path.join(
            __dirname, '..', '..', 
            'userProject', req.userId, project._id+'.json'),
            texto, function(err){
            if(err){
                console.log(err)
            }
        }) 
        
        return res.send({project});
     
    } catch (error) {
        console.log(error)
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

        project.elements = [];
        await Element.deleteOne({project: project._id})

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