const express = require('express');
const postRoutes = express.Router();
const postController = require('../controller/post.controller')
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const userIdentifier = require('../middleware/auth.middleware')

postRoutes.post('/',upload.single('image'),userIdentifier,postController.createPostController);
postRoutes.get('/',userIdentifier,postController.getPostController);
postRoutes.get('/details/:postId',userIdentifier,postController.getPostDetailController);
postRoutes.post('/like/:postId',userIdentifier,postController.likePostController);
postRoutes.get('/feed',userIdentifier,postController.getFeedController);
postRoutes.post('/unlike/:postId',userIdentifier,postController.unlikePostController);

module.exports = postRoutes;