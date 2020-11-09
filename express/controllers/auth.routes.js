var app = require('express');
var express = app();
var router = app.Router();
var userModel = require('./../models/user.model');
var passwordHash = require('password-hash');
var jwt = require('jsonwebtoken');
var config = require('./../config/index');
const sender = require('./../config/nodemailer.config');

function prepareEmail(details) {
    return {
        from: 'Product Management<noreply@abcd.com>',
        to: details.email,
        subject: 'Forgot Password✔',
        text: 'forgot password',
        html: `<p>Hi <strong>${details.name}</strong></p>
        <p>We noticed that you are having trouble logginb into our system, please use the link below to reset the password</p>
        <p><a href="${details.link}" target="_blank">Reset Password</a></p>
        <p>If you have not requested to reset your password, kindly ignore this email.</p>`
    }
}

router.get('/', function (req, res, next) {
    res.json({
        message: 'From auth page on get request'
    })
})
router.post('/login', function (req, res, next) {
    userModel.findOne({
        $or: [
            {
                username: req.body.username,
            }, {
                email: req.body.username
            }
        ]
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

router.post('/forgot-password', (req, res, next) => {
    userModel.findOne({
        email: req.body.email
    }).exec((err, user) => {
        if (err) {
            return next(err);
        }
        if (user) {
            var resetLink = req.headers.origin + '/auth/reset-password/' + user.username;
            var mailBody = prepareEmail({
                name: user.name,
                email: user.email,
                link: resetLink
            });
            console.log('Mail Body>>>', mailBody);
            user.passwordResetExpiry = new Date().getTime() + 1000 * 60 * 60 * 24 * 2;
            // user.password = null;
            user.save((err, saved) => {
                if (err) {
                    return next(err);
                }
                sender.sendMail(mailBody, (err, done) => {
                    if (err) {
                        return next(err);
                    } else {
                        res.json(done);
                    }
                })
            })

        } else {
            return next({
                message: 'User not registered with provided email'
            })
        }
    })

})

router.post('/reset-password/:username', (req, res, next) => {
    var username = req.params.username;
    userModel.findOne({
        username: username
    }).exec((err, user) => {
        if (err) {
            return next(err);
        }
        if (user) {
            var resetTime = new Date(user.passwordResetExpiry).getTime();
            var now = Date.now();
            if (resetTime > now) {
                user.password = passwordHash.generate(req.body.password);
                user.passwordResetExpiry = null;
                user.save((err, done) => {
                    if (err) {
                        return next(err);
                    }
                    res.json(done);
                })
            } else {
                return next({
                    message: 'Password reset link expired'
                })
            }

        } else {
            next: ({
                message: 'User not Found'
            })
        }
    })
})

module.exports = router;