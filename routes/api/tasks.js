const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const Task = require('../../models/Task');
const Profile = require('../../models/Profile');
const User = require('../../models/User');
const { route } = require('./auth');

// @route  Post api/tasks
// @desc   Create a task
// @access Private
router.post('/', [ auth, [
    check('title', 'Task title is required').not().isEmpty()
] ],
 async (req, res) => {
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

// @route  GET api/tasks
// @desc   Get all tasks
// @access Private
router.get('/', auth, async (req, res) => {
    try {
        const tasks = await Task.find().sort( { createdate: 1 });
        res.json(tasks);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

// @route  GET api/tasks/:id
// @desc   Get a task by ID
// @access Private
router.get('/:id', auth, async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);

        if(!task) {
            return res.status(404).json( { msg: 'Task not found' } )
        }

        res.json(task);
    } catch (error) {
        console.error(error.message);
        if(error.kind === 'ObjectId') {
            return res.status(404).json( { msg: 'Task not found' } )
        }
        res.status(500).send('Server Error');
    }
});

// @route  DELETE api/tasks/:id
// @desc   Delete a task
// @access Public
router.delete('/:id', auth, async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);


        if(!task) {
            return res.status(404).json( { msg: 'Task not found' } )
        }


        if(task.user.toString() !== req.user.id) {
            return res.status(401).json( { msg: 'User not authorized.' } )
        }

        await task.remove();

        res.json( { msg: 'Task Removed.' } );
    } catch (error) {
        console.error(error.message);
        if(error.kind === 'ObjectId') {
            return res.status(404).json( { msg: 'Task not found' } )
        }
        res.status(500).send('Server Error');
    }
});

// @route  PUT api/tasks/:id
// @desc   UPDATE a task
// @access Private
router.put('/:id', [ auth, [
    check('title', 'Task title is required').not().isEmpty()
] ], async (req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status(400).json( { errors: errors.array() });
    }

    const {
        title,
        status,
        owner,
        department,
        duedate
    } = req.body


    const taskFields = {};
    if (title) taskFields.title = title;
    if (owner) taskFields.owner = owner;
    if (department) taskFields.department = department;
    if (duedate) taskFields.duedate = duedate;
    if (status) taskFields.status = status;

    try {

    let updatedTask = await Task.findOneAndUpdate(
        { _id : req.params.id}, 
        { $set : taskFields },
        {new: true, upsert: true},
        );
    
    return res.json(updatedTask);


    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }


});





module.exports = router;

