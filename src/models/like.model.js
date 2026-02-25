const mongo = require('mongoose');
const likeSchema = new mongo.Schema({
      post:{
        type: mongo.Schema.Types.ObjectId,
        ref: 'posts',
        required: [true,'post id is required for creating a like']
      }, user:{
        type: String,
        required: [true,'username is required for creating a like']
      }
},{
    timestamps: true
})

likeSchema.index({post:1, user:1},{unique:true})
const likeModel = mongo.model('likes',likeSchema);

module.exports = likeModel;