const Task = require('../models/Task')

const getAllTasks = (req, res) =>{
    res.send('all items');
}
const createTask = async (req, res) =>{
    const task = await Task.create(req.body)
    res.status(201).json({task});
}
const getSingleTask = (req, res) =>{
    res.json({id: req.params.id})
}
const updateTask = (req, res) =>{
    res.send('update item');
}
const deleteTask = (req, res) =>{
    res.send('delete item');
}

module.exports =  {getAllTasks, createTask, getSingleTask, updateTask, deleteTask};