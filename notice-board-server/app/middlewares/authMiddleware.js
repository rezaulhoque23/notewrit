const jwt = require('jsonwebtoken');
const auth = (req, res, next) => {
    try {
        let token = req.headers.Authorization;
        if (token) {
            token = token.split(" ")[1];
            let user = jwt.verify(token, process.env.SECRET_KEY)
            req.userId = user.id
        } else {
            res.status(401).json({ message: 'Unauthorized User' });
        }
        next();
    } catch (err) {
        console.log(err)
        res.status(401).json({ message: 'Unauthorized User' });
    }
}

module.exports = auth;