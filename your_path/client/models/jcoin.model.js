const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let JCoin = new Schema({
    id: {
        type: Number
    },
    product_number: {
        type: Number
    },
    product_name: {
        type: String
    },
    value: {
        type: Number
    },
    routing: {
        type: Number
    },
    transfer: {
        type: Boolean
    },
    owner: {
        type: String
    },
    owner_id: {
        type: Number
    },
    owner_email: {
        type: String
    }
    transfer_id: {
        type: Number
    },
    sale_confirmation_number: {
        type: Number
    },
    venmo_account_number: {
        type: Number
    },
    venmo_account_f_name: {
        type: String
    },
    venmo_account_l_name: {
        type: String
    }
});

module.exports = mongoose.model('JCoin', JCoin); 