const {
    getAllTask,
    postCreateTask,
    putUpdateTask,
    deleteTask,
} = require("../controller/taskController");
const express = require("express");
const router = express.Router();


router.get("/", getAllTask);


router.post("/", postCreateTask);


router.put("/update", putUpdateTask);


router.delete("/delete", deleteTask);

module.exports = router;