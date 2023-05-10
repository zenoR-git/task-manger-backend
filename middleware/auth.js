const jwt = require('jsonwebtoken');


function auth(req,res,next){
    let token = req.headers.authorization
    
    if (!token){
        res.status(401).json({message:"unauthorized"})
        return
    }
    token = token.split(" ")[1]
    console.log(token)
    data = jwt.verify(token,process.env.JWT_SECRET_KEY_R)
    req.userId = data.id
    next()
}
module.exports = auth