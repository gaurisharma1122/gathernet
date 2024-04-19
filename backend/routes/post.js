const { Router } = require('express');
const { isUserAuthenticated } = require('../middleware/auth');
const { createPost, deletePost, likeOrUnlike, bookmark } = require('../controllers/post');
const router = Router();

router.post('/', isUserAuthenticated, createPost);
router.delete('/:id', isUserAuthenticated, deletePost);
router.get('/like/:id', isUserAuthenticated, likeOrUnlike);
router.get('/bookmark/:id', isUserAuthenticated, bookmark);

module.exports = router;