const { Router } = require('express');
const router = Router();
const { signup, login, logout, getMyProfile, getUserProfile, getAllOtherUsers, followOrUnfollowUser } = require('../controllers/user');
const { isUserAuthenticated } = require('../middleware/auth');

router.post('/signup', signup);
router.post('/login', login);
router.get('/logout', logout);
router.get('/me', isUserAuthenticated, getMyProfile);
router.get('/getAllUsers', isUserAuthenticated, getAllOtherUsers);
router.get('/:id', isUserAuthenticated, getUserProfile);
router.get('/follow/:id', isUserAuthenticated, followOrUnfollowUser);


module.exports = router;