const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let MedicalRequest = new Schema({
    medical_request_description: {
        type: String
    },
    medical_request_responsible: {
        type: String
    },
    medical_request_priority: {
        type: String
    },
    medical_request_completed: {
        type: Boolean
    }
});

module.exports = mongoose.model('MedicalRequest', MedicalRequest); 