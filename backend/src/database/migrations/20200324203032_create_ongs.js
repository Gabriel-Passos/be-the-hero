
exports.up = function (knex) {
    return knex.schema.createTable('ongs', function (table) {
        table.string('id').primary();
        table.string('email').notNullable().unique();
        table.string('whatsapp').notNullable().unique();
        table.string('name').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('ongs');
};