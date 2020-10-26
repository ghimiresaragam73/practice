var mongoose = require('mongoose');
let dbUrl;
if (process.env.db == 'atlas') {
    dbUrl = "mongodb+srv://admin:practicedb@practicedb.ehybp.mongodb.net/practicedb?retryWrites=true&w=majority";
    console.log('online database');
} else {
    dbUrl = 'mongodb://localhost:27017/practicedb';
}


mongoose.connect(dbUrl, function (err, done) {
    if (err) {
        console.log('database connection failed>>', err);
    }
    else {
        console.log('Database connection success');
    }
})