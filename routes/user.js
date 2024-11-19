const router = require('express').Router();
const userController = require('../controllers/user');
const {verifyToken} = require("../midlleware/jwt");

//POST / register a user
router.post('/me', verifyToken, userController.getMyInfos);

module.exports = router;