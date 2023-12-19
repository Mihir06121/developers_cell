// Import the models
const Todo = require('../models/todo') 

// create a new todo
exports.createTodo = (req, res) => {
    let todo = new Todo(req.body)

    todo.save().then(response => {
        res.send({
            message: response,
            success: true
        })
    }).catch(err => {
        res.send({
            error: err,
            success: false
        })
    })
}

// get all the todos from the todo collection
exports.getAllTodos = (req, res) => {
    Todo.find().then(response => {
        res.send({
            response
        })
    }).catch(err => {
        res.send({
            success: false,
            error: err
        })
    })
}