const express = require('express');
const followRoute = express.Router();
const userIdentifier = require('../middleware/auth.middleware');
const userController = require('../controller/user.controller');

/**
 * @route POST/api/users/follow/:userid
 * @description Follow a user
 * @access Private
 */

followRoute.post('/follow/:username',userIdentifier,userController.followUserController);

followRoute.post('/unfollow/:username',userIdentifier,userController.unfollowUserController);

module.exports = followRoute