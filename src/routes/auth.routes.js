const express = require('express');
const authRouter = express.Router();
const authController = require('../controller/auth.controller');

authRouter.post('/register',authController.registerController);
authRouter.post('/login',authController.loginController);
authRouter.get('/get-me',authController.getMeController);

module.exports = authRouter;
