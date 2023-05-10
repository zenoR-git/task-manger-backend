const { rawListeners } = require("../models/tasksModel");
const Task = require("../models/tasksModel");

exports.getAllTask = async (req, res) => {
    userId = req.userId ;
    tasks = await Task.find({userId: userId}).sort({_id:-1}) ;
    res.json(tasks)

};

exports.postCreateTask =async (req, res) => {
    task = {...req.body, userId: req.userId}
    console.log(task)
    let newTask = await Task.create(task)
    
    if (newTask){
        res.json({message: 'newTask created'})
    }      
};

exports.putUpdateTask =async (req, res) => {
    let update = await Task.findOneAndUpdate({_id:req.UserId}, req.body.new)
    res.json({message: update.message})
        // .then((data) => res.json({ message: "updated successfully", data }))
        // .catch((err) =>
        //     res
        //         .status(400)
        //         .json({ message: "Failed to update task", error: err.message })
        // );
};

exports.deleteTask = async (req, res) => {
    let status = await Task.findOneAndRemove({_id:req.userId})
    res.json({status})


        // .then((data) =>
        //     res.json({ message: "task deleted successfully", data })
        // )
        // .catch((err) =>
        //     res
        //         .status(404)
        //         .json({ message: "book not found", error: err.message })
        // );
};