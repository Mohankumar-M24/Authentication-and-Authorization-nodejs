const express = require('express');
const router = express.Router();
const { getUserInfo } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

router.get('/me', protect, getUserInfo);

module.exports = router;