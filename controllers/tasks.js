const getAllTasks = (req, res) =>{
    res.send('all items');
}
const createTask = (req, res) =>{
    res.send('create task');
}
const getSingleTask = (req, res) =>{
    res.send('single items');
}
const updateTask = (req, res) =>{
    res.send('update item');
}
const deleteTask = (req, res) =>{
    res.send('delete item');
}

module.exports = {getAllTasks, createTask, getSingleTask, updateTask, deleteTask};