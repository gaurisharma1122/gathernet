const { Router } = require('express');
const router = Router();
const { signup, login, logout } = require('../controllers/user');

router.post('/signup', signup);
router.post('/login', login);
router.get('/logout', logout);


module.exports = router;