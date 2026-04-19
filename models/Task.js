const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    user_id: { type: Number, required: true },
    title: { type: String, required: true },
    description: { type: String },
    due_date: { type: Date, required: true },
    status: { 
        type: String, 
        enum: ['pending', 'completed'], 
        default: 'pending' 
    }
});

module.exports = mongoose.model('Task', TaskSchema);