var app = require('express');
var express = app();
var bodyParser = require('body-parser');
var path = require('path');
require('./config/db');
var config = require('./config/index');
const morgan = require('morgan');
const cors = require('cors');
express.use(bodyParser.urlencoded({ extended: false }));
express.use(bodyParser.json());
//express.use(bodyParser());

/* Routing level middleware */
var authRouter = require('./controllers/auth.routes');
var userRouter = require('./controllers/user.routes');
var commentRouter = require('./controllers/comment.routes');
var loginRouter = require('./controllers/login.routes');
var productRouter = require('./controllers/product.routes')

/* Third Party Middleware */
express.use(morgan('dev'));
express.use(cors());

/* Load Application Level Middleware */
var authenticate = require('./middlewares/authenticate');

/* Inbuilt middleware */
/* express.use(app.static('files')) */ /* locally within express application */
express.use('/file', app.static(path.join(__dirname, 'files'))) /* When other programme (client) request for file */

express.use('/auth', authRouter);
express.use('/user', authenticate, userRouter);
express.use('/product', authenticate, productRouter);


express.use(function (req, res, next) {
    next('404: Page not Found');
})
/* Error handling middleware */
express.use(function (err, req, res, next) {
    console.log('I am error handling middleware');
    res.status(err.status || 400);
    res.json({
        message: err
    })
})

/* Server Creation */
express.listen(config.port, function (err, done) {
    if (err) {
        console.log('Server listening failed');
    }
    else {
        console.log('server listening at ' + config.port);

    }
    console.log('Press Ctrl+C to Exit');
})


