const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter name']
    },
    username: {
        type: String,
        unique: true,
        required: [true, 'Please enter username']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Please enter email']
    },
    password: {
        type: String,
        required: [true, 'Please enter password'],
        minLength: 6
    },
    bio: {
        type: String,

    },
    followers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    following: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post'
        }
    ],
    bookmarks: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post'
        }
    ]
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);
module.exports = User;