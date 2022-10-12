const Task = require('../models/task')

exports.getTasks = (req, res, next) => {
  Task
    .find()
    .then(tasks => {
      res
        .status(200)
        .json(tasks)
    })
}

exports.getTask = (req, res, next) => {
  Task
    .findById(req.params.id)
    .then(task => {
      if (task) {
        res
          .status(200)
          .json(task)
      } else {
        res
          .status(404)
          .json({message: 'Task not found'})
      }
    })
}

exports.createTask = (req, res, next) => {
  const newTask = new Task({
    text: req.body.text,
    date: req.body.date,
    reminder: req.body.reminder
  })
  newTask.save()
    .then(() => {
      res.status(200).json({ message: 'Task saved' })
    })
}

exports.editTask = (req, res, next) => {
  const task = {
    text: req.body.text,
    date: req.body.date,
    reminder: req.body.reminder
  }
  Task.updateOne({ _id: req.params.id }, task)
    .then(() =>
      res.status(200).json({ message: 'Task updated' })
    )
}


exports.deleteTask = (req, res, next) => {
  Task.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200).json({ message: 'Task deleted'})
    })
}

