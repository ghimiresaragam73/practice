var userModel = require('./../models/user.model');

function uploadUser(user, req) {
    console.log('req>>>>>>', req);
    if (req.name)
        user.name = req.name;
    if (req.address)
        user.address = req.address;
    if (req.username)
        user.username = req.username;
    if (req.password)
        user.password = req.password;
    if (req.email)
        user.email = req.email;
    if (req.phone)
        user.phone = req.phone;
    if (req.dob)
        user.dob = req.dob;
    if (req.role)
        user.role = req.role;
    console.log('user>>>>', user);
    return req;
}

module.exports = {
    uploadUser: uploadUser
}