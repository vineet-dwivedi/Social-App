const jwt = require('jsonwebtoken');
async function userIdentifier(req,res,next) {
    const token = req.cookies.token;
    if(!token){
        return res.status(401).json({
            message: 'Unauthorized'
        })
    }

    let decode = null;

    try{
         decode = jwt.verify(token, process.env.JWT_KEY);
    }catch(err){
          return res.status(401).json({
            message: 'Unauthorized'
          })
    }
    req.user = decode;
    next();
}

module.exports = userIdentifier;
