var app = require('express');
var router = app.Router();
var userModel = require('./../models/user.model');
var passwordHash = require('password-hash');

var authorize = require('./../middlewares/authorize');

router.get('/', function (req, res, next) {
    /* fetch all data from users */
    userModel.find({})
        .sort({
            _id: -1
        })
        /* .limit(1) */
        .exec(function (err, user) {
            if (err) {
                return next(err);
            }
            res.json(user);
        })
})

/* get by username */
router.get('/:username', function (req, res, next) {
    var username = req.params.username;
    userModel.findOne({ username: username }, function (err, user) {
        if (err) {
            return next(err);
        }
        res.json(user)
    })
})
/* Update user */
router.put('/:username', function (req, res, next) {
    var username = req.params.username;
    userModel.findOne({ username: username }).exec(function (err, user) {
        if (err) {
            return next(err);
        }
        if (user) {
            if (req.body.name)
                user.name = req.body.name;
            if (req.body.address)
                user.address = req.body.address;
            if (req.body.username)
                user.username = req.body.username;
            if (req.body.password)
                user.password = passwordHash.generate(req.body.password);
            if (req.body.email)
                user.email = req.body.email;
            if (req.body.phone)
                user.phone = req.body.phone;
            if (req.body.dob)
                user.dob = req.body.dob;
            if (req.body.role)
                user.role = req.body.role;
            /* console.log('loggeed>>', req.loggedInUser); */
            user.updatedBy = req.loggedInUser.username;
        }

        user.save(function (err, updated) {
            if (err) {
                return next(err);
            }
            res.json(updated);
        })
    })
})

router.delete('/:username', authorize, function (req, res, next) {
    var username = req.params.username;
    userModel.findOne({ username: username }, function (err, user) {
        if (err) {
            return (err);
        }
        if (user) {
            user.remove(function (err, removed) {
                if (err) {
                    return next(err);
                }
                else {
                    res.json(removed);
                }
            })
        } else {
            next('User not found');
        }
    })
})

module.exports = router;