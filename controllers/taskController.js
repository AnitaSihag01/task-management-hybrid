const Task = require('../models/Task'); 

// CREATE Task in MongoDB
exports.createTask = async (req, res) => {
    try {
        const { title, description, due_date } = req.body;
        const newTask = new Task({
            user_id: req.user.id, 
            title,
            description,
            due_date: due_date || new Date() 
        });
        await newTask.save();
        res.status(201).json(newTask);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// GET Tasks from MongoDB
exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ user_id: req.user.id });
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ error: "Server Error" });
    }
};

// UPDATE Task in MongoDB
exports.updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findOneAndUpdate(
            { _id: id, user_id: req.user.id },
            req.body,
            { new: true }
        );
        if (!task) return res.status(404).json({ error: "Task not found" });
        res.json(task);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// DELETE Task in MongoDB
exports.deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findOneAndDelete({ _id: id, user_id: req.user.id });
        if (!task) return res.status(404).json({ error: "Task not found" });
        res.json({ message: "Task deleted from MongoDB" });
    } catch (err) {
        res.status(500).json({ error: "Server Error" });
    }
};