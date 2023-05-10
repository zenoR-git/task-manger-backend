const Users = require("../models/userModel");
const jwt = require("jsonwebtoken");

const signUp = async (req,res)=>{
    const {name,password} = req.body
    let prev = await Users.findOne({name: name})
    if (prev == null){
        console.log(prev)
        console.log("User not found")
        let user = await Users.create(req.body)
        //token creation 
        let token = jwt.sign({id: user._id},process.env.JWT_SECRET_KEY_R,{
            expiresIn: '20m'
        })

        res.json({message:"user created successfully",token: token})
    }else{
        console.log(prev)
        res.json({message:"user already exists"})
    }
    
}

const login = async (req,res)=>{
    const {name,password} = req.body
    let user = await Users.findOne({name: name})
    if (user==null){
        res.json({message:"user not found"})
        return
    }
    //token creation 
    let token = jwt.sign({id: user._id},process.env.JWT_SECRET_KEY_R,{
        expiresIn: '20m'})
    res.json({message:"Logged in successfully",token: token})
}

module.exports = {signUp,login}