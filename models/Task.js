
const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    description: {
        type: String
    },

    assignedTo: {
        type: String,
        required: true
    },

    priority: {
        type: String,
        enum: ["LOW", "MEDIUM", "HIGH"],
        default: "MEDIUM"
    },

    status: {
        type: String,
        enum: ["TODO", "IN_PROGRESS", "BLOCKED", "DONE"],
        default: "TODO"
    }
}, {
    timestamps: true
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
