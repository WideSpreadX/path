const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Request = new Schema({
    request_description: {
        type: String
    },
    request_department: {
        type: String
    },
    request_priority: {
        type: String
    },
    request_completed: {
        type: Boolean
    }
});

module.exports = mongoose.model('Request', Request);