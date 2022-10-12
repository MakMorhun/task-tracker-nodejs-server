const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
  text: { type: String, required: true},
  date: { type: Date, required: true},
  reminder: { type: Boolean, required: false}
})

module.exports = mongoose.model('Task', taskSchema, 'notesData')
