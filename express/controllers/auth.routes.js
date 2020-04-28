var app = require('express');
var express = app();
var router = app.Router();
var userModel = require('./../models/user.model');
var passwordHash = require('password-hash');
var jwt = require('jsonwebtoken');
var config = require('./../config/index');


router.get('/', function (req, res, next) {
    res.json({
        message: 'From auth page on get request'
    })
})
router.post('/login', function (req, res, next) {
    userModel.findOne({
        username: req.body.username
    }).exec(function (err, user) {
        if (user) {
            var isMatched = passwordHash.verify(req.body.password, user.password);
            if (isMatched) {
                /* generate token */
                var token = jwt.sign({ id: user._id }, config.jwtSecret);
                res.json({
                    token: token,
                    user: user
                });
            } else {
                next('username/Password didnot match');
            }
        } else {
            next('Username/password didnot found');
        }
    })
})


router.post('/register', function (req, res, next) {
    var newUser = new userModel({});
    /* newUser.name = req.body.name;
    newUser.address = req.body.address;
    newUser.email = req.body.email;
    newUser.username = req.body.username;
    newUser.password = passwordHash.generate(req.body.password);
    newUser.phone = req.body.phone;
    newUser.dob = req.body.dob; */
    if (req.body.name)
        newUser.name = req.body.name;
    if (req.body.address)
        newUser.address = req.body.address;
    if (req.body.username)
        newUser.username = req.body.username;
    if (req.body.password)
        newUser.password = passwordHash.generate(req.body.password);
    if (req.body.email)
        newUser.email = req.body.email;
    if (req.body.phone)
        newUser.phone = req.body.phone;
    if (req.body.dob)
        newUser.dob = req.body.dob;
    if (req.body.role)
        newUser.role = req.body.role;

    newUser.save(function (err, user) {
        if (err) {
            return next(err);
        }
        res.json(user);
    })
})
module.exports = router;