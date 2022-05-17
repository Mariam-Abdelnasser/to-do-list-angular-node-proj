const jwt = require('jsonwebtoken');

const authenticationRequest = (req,res,next)=>{
    const authorization = req.headers.authorization;
    if (!authorization) return res.status(401).json({msg: "Unauthorized Request"});
    const token = authorization.split(' ')[1]; 
    try{
        const user = jwt.verify(token, "mariamnasser1111");
        req.user = user;
        next();
    }
    catch{
        res.status(401).json({msg: "Invalid Token"});
    }
}

module.exports = {authenticationRequest};
