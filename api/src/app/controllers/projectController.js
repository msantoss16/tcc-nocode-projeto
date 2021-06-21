const express = require('express');
const authMiddleare = require('../middlewares/auth');
const path = require('path');
const fs = require('fs');
const request = require('request');

const Project = require('../models/project');

const tempJson2 = require('../json/tempJson');

const router = express.Router();

router.use(authMiddleare);

router.get('/', async(req, res) =>{  
    try {
        const projects = await Project.find({user:req.userId}).populate('user');

        return res.send({ projects });

    } catch (error) {
        console.log(error)
        return res.status(400).send({ error: 'Error Loading projects' });
        
    }
});

router.get('/:projectId', async(req, res) => {
    try {
        const caminho = 'userProject/'+req.userId+'/'+req.params.projectId+'.json';

        fs.readFile(caminho, async function(err, data){
            if(err){
                console.log(err)
            }else{
                data = data.toString();
                data = JSON.parse(data);
                let project = await Project.findById(req.params.projectId).populate('user');
                let a = project.toObject();
                a.appCode = data;
                return res.send( a );
            }
        })
            
    } catch (error) {
        console.log(error)
        return res.status(400).send({ error: 'Error Loading project' });
    }
});

router.post('/', async(req, res) => {

    try {
        const {title, subtitle, version} = req.body

        data = tempJson2.appCode
        const texto = JSON.stringify(data)
        
        let project = await Project.create({ title, subtitle, version, user: req.userId, });

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
                
        return res.send(project);
        
    } catch (error) {
        console.log(error)
        return res.status(400).send({ error: 'Error Creating new project' });
    }

});

router.put('/:projectId', async(req, res) => {
    try {
        const { title, subtitle, version, appCode} = req.body;
        console.log(appCode)
        pages = JSON.stringify(appCode);
        console.log(pages)

        const caminho = 'userProject/'+req.userId+'/'+req.params.projectId+'.json';

        fs.writeFile(caminho, pages, async function(err, texto){
            if(err){
                console.log(err)
            }else{
                const project = await Project.findByIdAndUpdate(req.params.projectId,{
                    title,
                    subtitle, 
                    version,
                    pages}, {new: true });
                        
                return res.send(project);
            }
        })
    } catch (error) {
        console.log(error)
        return res.status(400).send({ error: 'Error Updating project' });
    }
});

router.delete('/:projectId', async(req, res) => {
    try {
        const caminho = 'userProject/'+req.userId+'/'+req.params.projectId+'.json';

        fs.unlink(caminho, async function(err, data){
            if(err){
                console.log(err)
            }else{
                await Project.findByIdAndRemove(req.params.projectId, data);
                return res.send();
            }

        })

    } catch (error) {
        return res.status(400).send({ error: 'Error Deleting project' });
    }
});

router.post('/download', async(req, res) => {
    try {
        request({
            url: 'http://localhost:5000/gExe/',
            method: 'POST',
            json: req.body
        }, function(error, response, body) {});
        return res.status(200).send({link: `http://localhost:5000/download/${req.body.user._id}/content%20Setup%201.0.0.exe`});
    } catch (error) {
        return res.status(400).send({error: 'Error download project'});
    }
})

module.exports = app => app.use('/projects', router);