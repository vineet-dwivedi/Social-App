const followModel = require('../models/follow.model');
const userModel = require('../models/user.model');

async function followUserController(req,res){
        const followerUsername = req.user.username;
        const followeeUsername = req.params.username;

        const followRecord = await followModel.create({
            follower: followerUsername,
            followee: followeeUsername
        })

        res.status(201).json({
            message:`You are now following ${followeeUsername}`,
            follow: followRecord
        })

        if(followeeUsername === followerUsername){
            return res.status(400).json({message: 'You cannot follow yourself'})
        }

        const isAlreadyFollowing = await followModel.findOne({
            follower: followerUsername,
            followee: followeeUsername
        })

        if(isAlreadyFollowing){
            return res.status(200).json({
                message: `Already Following ${followeeUsername}`,
                follow: followRecord
            })
        }

        const isUserExsist = await userModel.findOne({username: followeeUsername})

       if(!isUserExsist){
        return res.status(404).json({
            message: 'User you are trying to follow does not exsist'
        })
       }
}

async function unfollowUserController(req,res){
    const followerUsername = req.user.username;
    const followeeUsername = req.params.username;

    const isUserFollowing = await followModel.findOne({
        follower: followerUsername,
        followee: followeeUsername
    })

    if(!isUserFollowing){
        return res.status(200).json({
            message: `You are not following ${followeeUsername}`
        })
    }

    await followModel.findByIdAndDelete(isUserFollowing._id);

    res.status(200).json({
        message: `You have unfollowed ${followeeUsername}`
    })
}
module.exports = {followUserController,unfollowUserController}