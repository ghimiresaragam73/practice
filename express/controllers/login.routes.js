var app = require('express');
var router = app.Router();

router.get('/', function (req, res, next) {
    res.json({
        message: 'Congratulation Rohan You have successfully login'
    })
})

module.exports = router;