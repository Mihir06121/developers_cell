const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const todoRoutes = require('./routes/todoRoutes')

const app = express()

app.use(bodyParser.json())

mongoose.connect('mongodb://0.0.0.0:27017/todo-v1').then(() => {
    console.log("DB Connected")
})

app.use('/todo', todoRoutes)

const PORT = 4000

app.listen(PORT, () => {
    console.log(`server started on Port ${PORT}`)
})