const express = require('express')
const tasksController = require('../controllers/tasks')

const router = express.Router()

router.get('', tasksController.getTasks)

router.get('/:id', tasksController.getTask)

router.post('', tasksController.createTask)

router.put('/edit/:id', tasksController.editTask)

router.delete('/:id', tasksController.deleteTask)

module.exports = router

