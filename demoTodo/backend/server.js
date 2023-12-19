// Make sure to include all the imports at the start of the file
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const todoRoutes = require('./routes/todoRoutes')

const app = express()

app.use(bodyParser.json())

// Establishing connection to mongodb database here use "mongodb://localhost:27017/todo-v1" for windows
mongoose.connect('mongodb://0.0.0.0:27017/todo-v1').then(() => {
    console.log("DB Connected")
})

// defining Routes Here this should be just before the server start point
app.use('/todo', todoRoutes)

const PORT = 4000

// server Start Point
app.listen(PORT, () => {
    console.log(`server started on Port ${PORT}`)
})