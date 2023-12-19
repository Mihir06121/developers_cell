const Todo = require('../models/todo')

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