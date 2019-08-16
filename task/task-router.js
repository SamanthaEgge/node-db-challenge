const express = require('express')

const Tasks = require('./task-model.js')

const router = express.Router();

router.get('/', async (request, response) => {
  try {
    const tasks = await Tasks.find()
    response.json(tasks)
  } catch (error) {
    console.log(error)
    response.status(500).json({ message: 'Failed to retrieve tasks from the server' })
  }
})

router.post('/', async (request, response) => {
  const newTask = request.body

  try {
    const task = await Tasks.add(newTask)
    response.json(task)
  } catch (error) {
    console.log(error)
    response.status(500).json({ message: 'Failed to add new task to the server' })
  }
})

module.exports = router