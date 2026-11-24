
const Task = require("../models/Task");

// 1. Create Task
const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);

        res.status(201).json({
            message: "Task created successfully",
            data: task
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

// 2. Get All Tasks
const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();

        res.status(200).json({
            data: tasks
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// 3. Update Task
const updateTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!task) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        res.status(200).json({
            message: "Task updated successfully",
            data: task
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

// 4. Delete Task
const deleteTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);

        if (!task) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        res.status(200).json({
            message: "Task deleted successfully"
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

module.exports = {
    createTask,
    getTasks,
    updateTask,
    deleteTask
};
