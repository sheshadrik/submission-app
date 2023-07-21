const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    firstName: {
        required: true,
        type: String
    },
    lastName: {
        required: true,
        type: String
    },
    dob: {
        required: true,
        type: String
    },
    last4ssn: {
        required: true,
        type: String
    },
    address: {
        required: false,
        type: String
    },
    phone: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
} );

module.exports = mongoose.model('LoanApplication', dataSchema)