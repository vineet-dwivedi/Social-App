const mongo = require('mongoose');
const followSchema = new mongo.Schema({
    follower:{
        type: String,
    },
    followee:{
        type: String,
    },
    status:{
        type: String,
        default: 'a',
        enum:{
            values: ['pending','accepted','rejected'],
            message: 'Status can only be pending, accepted or rejected'
        }
    }
},{
    timestamps: true
})

followSchema.index({follower: 1, followee:1},{unique:true})

const followModel = mongo.model('followers',followSchema)

module.exports = followModel;