const userModel = require('../models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

async function registerController(req,res){
    const{username,email,password,bio,profileImage} = req.body;
    const isUserExsist = await userModel.findOne({
        $or:[
            {email},
            {username}
        ]
    })

    if(isUserExsist){
        return res.status(409).json({
            message: 'User already exsist' +(isUserAlreadyExsist.email == email ? "Email already exsist":"Username already exsist")
        })
    }

    const saltRound = 10;
    const hash = bcrypt.hash(password, saltRound);

    const user = await userModel.create({
        username,email,bio,profileImage,password:hash
    })

    const token = jwt.sign({
        id:user._id
    },process.env.JWT_KEY,{expiresIn:'1d'})

    res.cookie('token', token)
    res.status(201).json({
        message: 'User register successfully',
        user:{
            email:user.email,
            username:user.username,
            bio:user.bio,
            profileImage:user.profileImage
        }
    })
}

async function loginController(req,res){
    const{username,email,password} = req.body
    const user = await userModel.findOne({
        $or:[{username:username},
            {email:email}]
    })

    if(!user){
        return res.status(404).json({
            message: 'User not found'
        })
    }

    const isPassValid = await bcrypt.compare(password,user.password)

    if(!isPassValid){
        return res.status(401).json({
            message:'Password Invalid'
        })
    }

    const token = jwt.sign({id:user._id},process.env.JWT_KEY,{expiresIn:'1d'})

    res.cookie('token',token)

    res.status(200).json({
        message: 'User loggedIn',
        user:{
            username:user.username,
            email:user.email,
            bio:user.bio,
            profileImage:user.profileImage
        }
    })
}

module.exports = {registerController,loginController}