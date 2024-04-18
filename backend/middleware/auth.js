require('dotenv').config();
const jwt = require('jsonwebtoken');
const User = require('../db/UserSchema');
const jwt_secret = process.env.JWT_SECRET;

const isUserAuthenticated = async (req, res, next) => {
    try {
        const authcookie = req.cookies.authcookie;
        if (!authcookie) {
            res.status(411).json({
                success: false,
                message: 'You need to log in first'
            });
        }
        const decoded = jwt.verify(authcookie, jwt_secret);
        const user = await User.findOne({ _id: decoded.user_id });
        if (!user) {
            res.status(401).json({
                success: false,
                message: 'Invalid token'
            });
        }
        req.user = user;
        next();
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = { isUserAuthenticated };