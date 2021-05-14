const mongoose = require ('../../database');
const bcrypt = require('bcryptjs');

const ProjectSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    subtitle: {
        type: String,
        require: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true,
    },
    version: {
        type: String,
        require: true,
    },
    createdAt:{
      type: Date,
      default: Date.now,  
    },
        

});


const Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;
