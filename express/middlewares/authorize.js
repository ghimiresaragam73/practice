module.exports = function (req, res, next) {
    if (req.loggedInUser.role == 'admin') {
        return next();
    } else {
        next('You are not authorize');
    }
}