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

    const decode = jwt.verify(token, process.env.JWT_KEY);
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

module.exports = {createPostController}