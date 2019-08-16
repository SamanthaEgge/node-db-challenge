
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
      tbl.increments();
      tbl.text('project_name', 255)
        .unique()
        .notNullable();
      tbl.text('project_description');
    })
    .createTable('tasks', tbl => {
      tbl.increments();
      tbl.text('task_description')
        .notNullable();
      tbl.text('task_notes')
      tbl.integer('project')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
    .createTable('resources', tbl => {
      tbl.increments();
      tbl.text('resources_name')
        .notNullable()
        .unique()
      tbl.text('resources_description')
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('steps')
    .dropTableIfExists('schemes');
};