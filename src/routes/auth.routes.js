const express = require('express');
const authRouter = express.Router();
const authController = require('../controller/auth.controller');
const userIdentity = require('../middleware/auth.middleware');

authRouter.post('/register',authController.registerController);
authRouter.post('/login',authController.loginController);
authRouter.get('get-me',userIdentity,authController.getMeController);

module.exports = authRouter;