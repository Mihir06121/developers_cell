const express = require('express')
const { createTodo } = require('../controllers/todoControllers')

const router = express.Router()

router.post('/create-todo', createTodo)

module.exports = router