const Task = require('../models/taskModel');


//create new task
const createTask = async (req, res) => {

    try {
        const { title, description } = req.body;

        if (!title) {
            return res.status(400).json({ message: 'Title is required' });
        }
        if (!description) {
            return res.status(400).json({ message: 'Description is required' });
        }
        const task = new Task({
            title,
            description
        })
        await task.save();
        res.status(201).json(task);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Server error' });
    }
}

//display all tasks
const getAllTasks = async (req, res) => {

    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Server error' });
    }

}

//update task

const updateTask = async (req, res) => {

    try {

        const task = await Task.findById(req.params.id);

        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        task.title = req.body.title || task.title;
        task.description = req.body.description || task.description;

        const updatedTask = await task.save();
        res.json(updatedTask);

    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Server error' });
    }

}

//delete task

const deleteTask = async (req, res) => {

    try{

        const task = await Task.findById(req.params.id);

        if(!task){
            return res.status(404).json({message:'Task not found'});
        }

        await task.deleteOne();
        res.json({message:'Task deleted'});
    }catch(err){
        res.status(500).json({message:'Server error'});
    }
}

//mark completed

const markCompleted = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);

        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        task.completed = true;
        const updatedTask = await task.save();
        res.json(updatedTask);

    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Server error' });
    }
}


module.exports = {
    createTask,
    getAllTasks,
    updateTask,
    deleteTask,
    markCompleted
}
