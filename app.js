const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const tasksRoutes = require('./routes/tasks')

const app = express()

mongoose.connect(`mongodb+srv://user:${process.env.MONGO_PW}@cluster0.uidwdtl.mongodb.net/notes-app?retryWrites=true&w=majority`)
  .then(() => {
    console.log('Connected  to database')
  })
  .catch(() => {
    console.log('Connection failed')
  })

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers',
   'Origin, X-Requested-With, Content-Type, Accept')
  res.setHeader('Access-Control-Allow-Methods',
    'GET, POST, PATCH, PUT, DELETE, OPTIONS')
   next()
})

app.use('/tasks', tasksRoutes)

module.exports = app
