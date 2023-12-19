const express = require('express')

// always import individual functions here from the controllers rather NOT THE WHOLE FILE
const { createTodo } = require('../controllers/todoControllers')

const router = express.Router()

// All routes must be defined here  
router.post('/create-todo', createTodo)

module.exports = router