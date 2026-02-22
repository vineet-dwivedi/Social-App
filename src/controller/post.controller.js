const postModel = require('../models/post.model');
const {toFile}= require('@imagekit/nodejs');
const ImageKit = require('@imagekit/nodejs');
const jwt = require('jsonwebtoken');
const client = new ImageKit({
    privateKey: process.env.IMAGE_KIT
});

async function createPostController(req,res){
    console.log(req.body);
    console.log(req.file);

    const token = req.cookies.token;
    if(!token){
        return res.status(401).json({
            message: 'Unauthorized access'
        })
    }
 
    let decode

    try{
         decode = jwt.verify(token, process.env.JWT_KEY);
    }catch(err){
          return res.status(401).json({
            message: 'Unauthorized'
          })
    }
    
    console.log(decode);

    const files = await client.files.upload({
        file: await toFile(Buffer.from(req.file.buffer), 'file'),
        fileName: 'Test',
        folder: 'social-app'
    })

    const post = await postModel.create({
        caption: req.body.caption,
        img_url: files.url,
        user: decode.id,
    })

    res.status(201).json({
        message: 'Post Created',
        post
    })
}

async function getPostController(req,res) {
    const token = req.cookies.token;
    if(!token){
        return res.status(401).json({
            message: 'Unauthorized access'
        })
    }

    let decode;
    try{
        decode = await jwt.verify(token,process.env.JWT_KEY);
    }catch(err){
         return res.status(401).json({
            message: 'Unauthorized Access'
         })
    }

    const userId = decode.id;

    const post = await postModel.findOne({user: userId});
    res.status(200).json({
        message: 'Post Fetched',
        post
    })
}

async function getPostDetailController(req,res) {
    const token = req.cookies.token;
    if(!token){
        return res.status(401).json({
            message: 'Unauthorized'
        })
    }

    let decode;
    try{
        decode = await jwt.verify(token,process.env.JWT_KEY);
    }catch(err){
        return res.status(401).json({
            message: 'Unauthorized Access'
        })
    }

    const userId = decode.id;
    const postId = req.params.postId;

    const post= await postModel.findById(postId);

    if(!post){
        return res.status(404).json({
            message: 'Post Not Found'
        })
    }

    const isValidUser = post.user === userId;
    if (!isValidUser){
        return res.status(403).json({
            message: 'Forbidden'
        })
    }

    return res.status(200).json({
        message: 'Post Details Fetched',
        post
    })
}
module.exports = {createPostController,getPostController,getPostDetailController}