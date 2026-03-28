const express = require('express');
const router =express.Router();

const {createTask,getAllTasks,updateTask,deleteTask,markCompleted} = require('../controllers/TaskController');

router.post('/',createTask);
router.get('/',getAllTasks);
router.put('/:id',updateTask);
router.delete('/:id',deleteTask);
router.patch('/:id',markCompleted);

module.exports=router;