const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let LawyerRequest = new Schema({
    lawyer_request_description: {
        type: String
    },
    lawyer_request_responsible: {
        type: String
    },
    lawyer_request_priority: {
        type: String
    },
    lawyer_request_completed: {
        type: Boolean
    }
});

module.exports = mongoose.model('LawyerRequest', LawyerRequest); 