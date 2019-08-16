const knex = require('knex')
const knexConfig = require('../knexfile.js')

const db = knex(knexConfig.development)

module.exports = {
  find,
  add
}

function find() {
  return db('projects')
}

function add(project) {
  return db('projects')
    .insert(project)
}