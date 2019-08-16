const express = require('express')

const Resources = require('./resource-model.js')

const router = express.Router();

router.get('/', async (request, response) => {
  try {
    const resources = await Resources.find()
    response.json(resources)
  } catch (error) {
    console.log(error)
    response.status(500).json({ message: 'Failed to retrieve resources from the server' })
  }
})

router.post('/', async (request, response) => {
  const newResource = request.body

  try {
    const resource = await Resources.add(newResource)
    response.json(resource)
  } catch (error) {
    console.log(error)
    response.status(500).json({ message: 'Failed to add new resource to the server' })
  }
})