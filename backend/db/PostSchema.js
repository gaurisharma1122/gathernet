const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    description: {
        type: String,
        required: [true, 'Please enter a description'],
    },
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    comments: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            },
            text: {
                type: String,
                required: true
            }
            
        }
    ],
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    image: {
        type: String
    }

}, { timestamps: true });

const Post = mongoose.model('Post', PostSchema);
module.exports = Post;