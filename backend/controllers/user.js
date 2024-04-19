require('dotenv').config();
const User = require("../db/UserSchema");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const jwt_secret = process.env.JWT_SECRET;

const signup = async (req, res) => {
    try {
        const { name, username, email, password } = req.body;
        if (!name || !username || !email || !password) {
            res.status(411).json({
                success: false,
                message: 'Please enter all the required fields: Name, Username, Email and Password'
            });
        }
        const user = await User.findOne({ username, email });
        if (user) {
            res.status(401).json({
                success: false,
                message: 'Username or email has already been taken'
            });
        } else {
            const hashedPassword = await bcrypt.hash(password, 16);
            const newUser = await User.create({ name, username, email, password: hashedPassword });
            res.status(200).json({
                success: true,
                message: 'User has been created successfully'
            });
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(411).json({
                success: false,
                message: 'Please enter all required fields: Email and Password'
            });
        }
        const user = await User.findOne({ email }).select('+password');
        if (!user) {
            res.status(411).json({
                success: true,
                message: 'User not found'
            });
        }
        const matchPassword = await bcrypt.compare(password, user.password);
        if (!matchPassword) {
            res.status(411).json({
                success: false,
                message: 'Wrong Password'
            });
        } else {
            const token = jwt.sign({ user_id: user._id }, jwt_secret, { expiresIn: "1d" });
            res.status(200).cookie('authcookie', token, {
                httpOnly: true,
                path: '/',
                expires: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000)
            }).json({
                success: true,
                message: 'User logged in successfully',
                user
            });
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const logout = (req, res) => {
    try {
        res.status(200).cookie('authcookie', '', {
            expiresIn: new Date(Date.now())
        }).json({
            success: true,
            message: 'User logged out successfully'
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

const getMyProfile = (req, res) => {
    try {
        res.status(200).json({
            success: true,
            user: req.user
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

const getUserProfile = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findById(userId);
        if (!user) {
            res.status(411).json({
                success: false,
                message: "User does not exist"
            });
        }
        res.status(200).json({
            success: true,
            message: "User profile found",
            user
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

const getAllOtherUsers = async (req, res) => {
    try {
        const user = req.user;
        const otherUsers = await User.find({ _id: { $ne: user._id } });
        if (!otherUsers) {
            res.status(411).json({
                success: false,
                message: "No user found"
            });
        }
        res.status(200).json({
            success: true,
            users: otherUsers
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

const followOrUnfollowUser = async (req, res) => {
    try {
        const userToBeFollowed = await User.findById(req.params.id);
        const user = req.user;
        if (!userToBeFollowed) {
            res.status(411).json({
                success: false,
                message: "User not found"
            });
        }
        if (user.following.includes(userToBeFollowed._id)) {
            //unfollow
            user.following.splice(user.following.indexOf(userToBeFollowed._id), 1);
            userToBeFollowed.followers.splice(userToBeFollowed.followers.indexOf(user._id), 1);
            await user.save();
            await userToBeFollowed.save();
            res.status(200).json({
                success: true,
                message: "User unfollowed successfully"
            });
        } else {
            //follow
            user.following.push(userToBeFollowed._id);
            userToBeFollowed.followers.push(user._id);
            await user.save();
            await userToBeFollowed.save();
            res.status(200).json({
                success: true,
                message: "User followed successfully"
            });
        }

    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}
module.exports = { signup, login, logout, getMyProfile, getUserProfile, getAllOtherUsers, followOrUnfollowUser };