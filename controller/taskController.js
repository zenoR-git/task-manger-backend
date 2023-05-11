const { rawListeners } = require("../models/tasksModel");
const Task = require("../models/tasksModel");

exports.getAllTask = async (req, res) => {
    try{userId = req.userId ;
    tasks = await Task.find({userId: userId}).sort({_id:-1}) ;
    res.status(200).json(tasks)}
    catch(err){res.status(400).json({message: "error occured"})}

};

exports.postCreateTask =async (req, res) => {
    try{
    task = {...req.body, userId: req.userId}
    console.log(task)
    let newTask = await Task.create(task)
    
    if (newTask){
        res.json({message: 'newTask created'})
    }  }catch(err){res.status(400).json({message:"error occured"})}    
};

exports.putUpdateTask =async (req, res) => {
    try{
    let update = await Task.findOneAndUpdate({_id:req.body.id}, {...req.body.new,userId: req.userId})
    res.json({message: update.message})
    }catch(err){
        res.status(400).json({message: "error occured"})
    }
        
};

exports.deleteTask = async (req, res) => {
    try{let status = await Task.findOneAndRemove({_id:req.body.id})
    res.status(200).json({status})
    }catch(err){
        res.status(400).json({message: "error occured"})
    }

};