var mongoose = require('mongoose');
var conxnUrl = 'mongodb://localhost:27017/practicedb';

mongoose.connect(conxnUrl, function (err, done) {
    if (err) {
        console.log('database connection failed');
    }
    else {
        console.log('Database connection success');
    }
})