var app = require('express');
var router = app.Router();

router.get('/', function (req, res, next) {
    res.json({
        message: 'From comment page on get request'
    })
})

router.put('/', function (req, res, next) {
    res.json({
        message: 'From comment page on put request'
    })
})

router.post('/', function (req, res, next) {
    res.json({
        message: 'From comment page on post request'
    })
})

router.delete('/', function (req, res, next) {
    res.json({
        message: 'From comment page on delete request'
    })
})
module.exports = router;