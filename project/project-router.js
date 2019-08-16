const express = require('express')

const Projects = require('./project-model.js')

const router = express.Router();

router.get('/', async (request, response) => {
  try {
    const projects = await Projects.find()
    response.json(projects)
  } catch (error) {
    console.log(error)
    response.status(500).json({ message: 'Failed to retrieve projects from the server' })
  }
})

router.post('/', async (request, response) => {
  const newProject = request.body

  try {
    const project = await Projects.add(newProject)
    response.json(project)
  } catch (error) {
    console.log(error)
    response.status(500).json({ message: 'Failed to add new project to the server' })
  }
})

module.exports = router