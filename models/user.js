let mongoose = require('mongoose');
// User Schema
const user = mongoose.model('Crud', {
    name: {
        type: String,
        required:true
    }, 
    email: {
        type:String,
        required:true
    },
    country: {
        type:String,
        required:true
    }
});



module.exports = {user}