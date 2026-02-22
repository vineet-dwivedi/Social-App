const express = require('express');
const postRoutes = express.Router();
const postController = require('../controller/post.controller')
const multer = require('multer');
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

postRoutes.post('/',upload.single('image'),postController.createPostController);
postRoutes.get('/',postController.getPostController);
postRoutes.get('/details/:postId',postController.getPostDetailController);

module.exports = postRoutes;