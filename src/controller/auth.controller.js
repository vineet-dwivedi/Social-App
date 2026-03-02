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
            message: 'User already exists ' + (isUserExsist.email == email ? "Email already exists" : "Username already exists")
        })
    }

    const saltRound = 10;
    const hash = await bcrypt.hash(password, saltRound);

    const user = await userModel.create({
        username,email,bio,profileImage,password:hash
    })

    const token = jwt.sign({
        id:user._id,
        username:user.username
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
    }).select('+password');

    if(!user){
        return res.status(401).json({
            message: 'Invalid credentials'
        })
    }

    const isPassValid = await bcrypt.compare(password,user.password)

    if(!isPassValid){
        return res.status(401).json({
            message:'Invalid credentials'
        })
    }

    const token = jwt.sign({id:user._id,username:user.username},process.env.JWT_KEY,{expiresIn:'1d'})

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

async function getMeController(req,res){
    const token = req.cookies.token;

    if(!token){
        return res.status(200).json({
            user: null
        })
    }

    let decode = null;
    try{
        decode = jwt.verify(token, process.env.JWT_KEY);
    }catch(err){
        return res.status(200).json({
            user: null
        })
    }

    const userId = decode.id
    const user = await userModel.findById(userId)

    if(!user){
        return res.status(200).json({
            user: null
        })
    }

    res.status(200).json({
        user:{
            username: user.username,
            email: user.email,
            bio: user.bio,
            profileImage: user.profileImage
        }
    })
}

module.exports = {registerController,loginController,getMeController}
