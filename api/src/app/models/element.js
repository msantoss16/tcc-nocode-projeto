const mongoose = require ('../../database');
const bcrypt = require('bcryptjs');

const ElementSchema = new mongoose.Schema({
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
        require: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true,
    },
    html: {
        type: String,
        require: true,
    },
    property:[{
        type: Object,
        require: true,
    }],
    style:{
        type: Object,
        require: true,
    }, 
    createdAt:{
      type: Date,
      default: Date.now,  
    },    

});


const Element = mongoose.model('Element', ElementSchema);

module.exports = Element;
