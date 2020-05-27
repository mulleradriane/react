exports.up = function(knex) {
    return knex.schema.createTable('carro', function(table) {
        table.string('id').primary();
        table.string('nomeCarro').notNullable();
        table.string('peca').notNullable(); //peça que vai no carro
        table.string('custoTotal', 6).notNullable();
        table.string('tempoProducao', 5).notNullable();
        table.string('chassi', 10).notNullable();

    });
};

exports.down = function(knex) {
  knex.schema.dropTable('carro');
};
