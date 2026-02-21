const mongo = require('mongoose');
const postSchema = new mongo.Schema({
    caption : {
        type: String,
        default: ""
    },
    img_url : {
        type: String,
        required: [true,'Image is required for creating and post']
    },
    user :{
        ref: 'users',
        type: mongo.Schema.Types.ObjectId,
        required: [true,'User id is required for creating an post']
    },
    // createdAt :{

    // }
})

const postModel = mongo.model('posts', postSchema);

module.exports = postModel;