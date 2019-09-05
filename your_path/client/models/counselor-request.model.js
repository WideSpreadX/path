const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CounselorRequest = new Schema({
    counselor_request_description: {
        type: String
    },
    counselor_request_responsible: {
        type: String
    },
    counselor_request_priority: {
        type: String
    },
    counselor_request_completed: {
        type: Boolean
    }
});

module.exports = mongoose.model('CounselorRequest', CounselorRequest); 