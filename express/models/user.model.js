var mongoose = require('mongoose');
var Schema = mongoose.Schema;
/* Defining schema */
var userSchema = new Schema({
    name: {
        type: String
    },
    address: {
        type: String
    },
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        sparse: true
    },
    phone: {
        type: Number,
        unique: true
    },
    dob: {
        type: Date
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    },
    updatedBy: {
        type: String
    },
    passwordResetExpiry:Date
}, {
    timestamps: true
});

var userModel = mongoose.model('user', userSchema);
module.exports = userModel;