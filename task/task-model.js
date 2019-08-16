const knex = require('knex')
const knexConfig = require('../knexfile.js')

const db = knex(knexConfig.development)

module.exports = {
  find,
  add
}

function find() {
  return db('tasks')
}

function add(task) {
  return db('tasks')
    .insert(task)
}