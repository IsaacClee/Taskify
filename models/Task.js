const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskScheme = new Schema({ 
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    title: {
        type: String,
        required: true
    },
    owner: {
        type: String,
    },
    status: {
        type: String,
        enum: ['NEW', 'PLANNED', 'IN PROGRESS', 'COMPLETED'],
        default: 'NEW',
        required: true
    },
    department: {
        type: String
    },
    createdate: {
        type: Date,
        default: Date.now
    },
    duedate: {
        type: String,
        default: 'No due date'
    }
});

module.exports = Task = mongoose.model('task', TaskScheme);
