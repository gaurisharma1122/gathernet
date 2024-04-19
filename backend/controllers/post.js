const Post = require("../db/PostSchema");

const createPost = async (req, res) => {
    try {
        const user = req.user;
        const { description } = req.body;
        if (!description) {
            res.status(200).json({
                success: false,
                message: 'Please enter a description'
            });
        }
        const newPost = await Post.create({ description, owner: user._id });
        user.posts.push(newPost._id);
        await user.save();
        res.status(200).json({
            success: true,
            message: 'Post created successfully'
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const deletePost = async (req, res) => {
    try {
        const user = req.user;
        const postId = req.params.id;
        const post = await Post.findById(postId);
        if (!post) {
            res.status(411).json({
                success: false,
                message: 'Post does not exist'
            });
        }
        if (post.owner.toString() != user._id.toString()) {
            res.status(401).json({
                success: false,
                message: 'You are not authenticated to delete this post'
            });
        }

        await Post.deleteOne({ _id: postId });
        if (user.posts.indexOf(postId) != -1) {
            user.posts.splice(user.posts.indexOf(postId), 1);
            await user.save();
            res.status(200).json({
                success: true,
                message: 'Post deleted successfully'
            });
        } else {
            res.status(411).json({
                success: false,
                message: 'You cannot delete this post'
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

const likeOrUnlike = async (req, res) => {
    try {
        const postId = req.params.id;
        const user = req.user;
        const post = await Post.findById(postId);
        if (!post) {
            res.status(411).json({
                success: false,
                message: "Post not found"
            });
        }
        if (post.likes.includes(user._id)) {
            post.likes.splice(post.likes.indexOf(user._id), 1);
            await post.save();
            res.status(200).json({
                success: true,
                message: "Post unliked successfully"
            });
        } else {
            post.likes.push(user._id);
            await post.save();
            res.status(200).json({
                success: true,
                message: "Post liked successfully"
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

const bookmark = async (req, res) => {
    try {
        const postId = req.params.id;
        const user = req.user;
        if (user.bookmarks.includes(postId)) {
            user.bookmarks.splice(user.bookmarks.indexOf(postId), 1);
            await user.save();
            res.status(200).json({
                success: true,
                message: "Post unbookmarked successfully"
            });
        } else {
            user.bookmarks.push(postId);
            await user.save();
            res.status(200).json({
                success: true,
                message: "Post bookmarked successfully"
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



module.exports = { createPost, deletePost, likeOrUnlike, bookmark, getAllPosts, getFollowingPosts };