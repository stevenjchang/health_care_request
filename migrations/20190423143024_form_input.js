
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('form_input', function(table) {
      table.increments('id').primary();
      table.string('top');
      table.string('left');
      table.string('height');
      table.string('width');
      table.string('type');
      table.timestamps();
    }),
  ])
};

exports.down = function(knex, Promise) {
};
