const postModel = require('../models/post.model');
const {toFile}= require('@imagekit/nodejs');
const ImageKit = require('@imagekit/nodejs');
const client = new ImageKit({
    privateKey: process.env.IMAGE_KIT
});

async function createPostController(req,res){

    const files = await client.files.upload({
        file: await toFile(Buffer.from(req.file.buffer), 'file'),
        fileName: 'Test',
        folder: 'social-app'
    })

    const post = await postModel.create({
        caption: req.body.caption,
        img_url: files.url,
        user: req.user.id,
    })

    res.status(201).json({
        message: 'Post Created',
        post
    })
}

async function getPostController(req,res) {

    const userId = req.user;

    const post = await postModel.findOne(userId);
    res.status(200).json({
        message: 'Post Fetched',
        post
    })
}

async function getPostDetailController(req,res) {

    const userId = req.user;
    const postId = req.params.postId;

    const post= await postModel.findById(postId);

    if(!post){
        return res.status(404).json({
            message: 'Post Not Found'
        })
    }

    const isValidUser = post.userId === userId;
    if (!isValidUser){
        return res.status(403).json({
            message: 'Forbidden Content'
        })
    }

    return res.status(200).json({
        message: 'Post Details Fetched',
        post
    })
}

async function likePostController(req,res){
    const username = req.user.username;
    const postId = req.params.postId; 

    const post = await postModel.findById(postId);

    if(!post){
        return res.status(404).json({
            message: 'Post not found'
        })
    }

    const like = await likeModel.create({
        post: postId,
        user: username
    })

    res.status(200).json({
        message: 'Post liked successfully.',
        like
    })
}

module.exports = {createPostController,getPostController,getPostDetailController,likePostController}