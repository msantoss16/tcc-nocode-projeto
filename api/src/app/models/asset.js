const mongoose = require ('../../database');

const AssetSchema = new mongoose.Schema({
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
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
        require: true,
    },
    shared:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true,
    }],
    version: {
        type: String,
        require: true,
    },
    createdAt:{
      type: Date,
      default: Date.now,  
    },
    updatedAt:{
        type: Date,
        default: Date.now,  
      },    

});
const Asset = mongoose.model('Asset', AssetSchema);

module.exports = Asset;
