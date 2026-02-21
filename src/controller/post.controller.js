const postModel = require('../models/post.model');
const {toFile}= require('@imagekit/nodejs');
const ImageKit = require('@imagekit/nodejs');
const client = new ImageKit({
    privateKey: process.env.IMAGE_KIT
});

async function createPostController(req,res){
    const files = await client.files.upload({
        file: await toFile(Buffer.from(req.file.buffer), 'file'),
        fileName: 'Test'
    })
}

module.exports = {createPostController}