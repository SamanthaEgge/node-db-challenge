
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
      tbl.increments();
      tbl.text('project_name', 255)
        .unique()
        .notNullable();
      tbl.text('project_description');
      
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('steps')
    .dropTableIfExists('schemes');
};