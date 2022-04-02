const mongoose = require('mongoose');

const developerSchema = mongoose.Schema({
    // make a schema
});

const Auth = mongoose.model('Auth',authSchema);


module.exports = Auth;