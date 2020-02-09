const {User} = require('./../models/user');

let auth = (req, res, next) => {
    const { token } = req.body

    User.findByToken(token, (err, user) => {
        if (err) throw err;
        if (!user) return res.status(403).json({
            ifAuth: false,
            error: true
        })

        req.token = token;
        req.user = user;
        next();
    })
}

module.exports = {auth};