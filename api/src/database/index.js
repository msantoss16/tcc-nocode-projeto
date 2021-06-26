const mongoose = require('mongoose');
const config = require('../config/default.json');

mongoose.connect(config.mongodb.link, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,   
    useFindAndModify: false,
});

mongoose.Promise = global.Promise;

module.exports = mongoose;

