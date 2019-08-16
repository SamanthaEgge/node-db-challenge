
exports.up = function(knex) {
  return knex.schema
    .createTable('resources', tbl => {
      tbl.increments();
      tbl.text('resource_name')
        .notNullable()
        .unique()
      tbl.text('resource_description')
    })
    .createTable('projects', tbl => {
      tbl.increments();
      tbl.text('project_name', 255)
        .unique()
        .notNullable();
      tbl.text('project_description');
      tbl.boolean('project_completed')
        .defaultTo(false)
      tbl.foreign('resource_id')
        .references('id')
        .inTable('resources')
    })
    .createTable('tasks', tbl => {
      tbl.increments();
      tbl.text('task_description')
        .notNullable();
      tbl.text('task_notes')
      tbl.boolean('task_completed')
        .defaultTo(false)
      tbl.foreign('project')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('tasks')
    .dropTableIfExists('projects')
    .dropTableIfExists('resources')
};