const knex = require('knex')
const knexConfig = require('../knexfile.js')

const db = knex(knexConfig.development)

module.exports = {
  find,
  findById,
  add
}

function find() {
  return db('tasks as t')
    .join('projects as p', 't.project', '=', 'p.id')
    .select('t.id', 't.task_description', 't.task_notes', 't.task_completed', 'p.project_name', 'p.project_description')
}

function findById(id) {
  return db('tasks')
    .where({ id })
    .first()
}

async function add(task) {
  const [id] = await db('tasks').insert(task)
    return findById(id)
}