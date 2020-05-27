exports.up = function(knex) {
    return knex.schema.createTable('funcionario', function(table) {
        table.string('id').primary();
        table.string('nome').notNullable();
        table.string('email').notNullable();
        table.string('telefone', 11).notNullable();
        table.string('senha').notNullable();
        table.string('cpf').notNullable();
    });
};

exports.down = function(knex) {
  knex.schema.dropTable('funcionario');
};
