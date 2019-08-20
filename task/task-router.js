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

router.get('/:id', async (request, response) => {
  const id = request.params.id
  try {
    const task = await Tasks.findById(id)
    response.json(task)
  } catch (error) {
    console.log(error)
    response.status(500).json({ message: 'failed to retrieved task from server'})
  }
})

module.exports = router