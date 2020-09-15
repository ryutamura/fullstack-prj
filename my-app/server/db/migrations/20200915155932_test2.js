
exports.up = function(knex) {
    return knex.schema.createTable("rapper_info", (table) => {
        table.increments().primary()
        table.text('city');
        table.text('name');
        table.float('latitude');
        table.float('longitude');
        table.text('bio_sum');
        table.text('youtube');
        table.text('bio_url');
    })

};

exports.down = function(knex) {
    return knex.schema.dropTable('rapper_info');
};
