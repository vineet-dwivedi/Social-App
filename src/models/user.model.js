const mongo = require('mongoose');
const userSchema = new mongo.Schema({
    username:{
        type: String,
        unique: [true, 'Username already exsist'],
        required: [true]
    },
    email:{
        type: String,
        unique: [true,'Email already  exsist'],
        required: [true]
    },
    password:{
        type: String,
        required: [true,'Enter pass'],
        select: false
    },
    bio: String,
    profileImage:{
        type: String,
        default: 'https://ik.imagekit.io/vyukxce/download.jpg?updatedAt=1770885688593'}
})

const userModel = mongo.model('users',userSchema);
module.exports = userModel;