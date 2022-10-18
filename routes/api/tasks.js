const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const Task = require('../../models/Task');
const Profile = require('../../models/Profile');
const User = require('../../models/User');

// @route  Post api/tasks
// @desc   Create a task
// @access Private
router.post('/', [ auth, [
    check('title', 'Task title is required').not().isEmpty()
] ], async (req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status(400).json( { errors: errors.array() });
    }

    try {
        const user = await User.findById(req.user.id).select('-password');

        const newTask = new Task ({
            title: req.body.title,
            user: req.user.id,
            avatar: req.user.avatar,
            status: req.body.status,
            owner: req.body.owner,
            department: req.body.department,
            duedate: req.body.duedate
        });

        const task = await newTask.save();

        res.json(task);

    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }


});

module.exports = router;

