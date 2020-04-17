
exports.up = function(knex) {
    return knex.schema.createTable("project", tbl => {
        tbl.increments()
        tbl.string("project_name", 128)
        .notNullable();

        tbl.string("description")

        tbl.boolean("completed").defaultTo(false).notNullable()

    })
    .createTable("resource", tbl => {
        tbl.increments()
        tbl.string("resource_name", 128).unique().notNullable()
        tbl.string("description", 128)
    })
    .createTable("task", tbl => {
        tbl.increments()

        tbl.integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("project")
        .onUpdate("CASCADE")
        .onDelete("CASCADE")

        tbl.string("description", 128).notNullable()
        tbl.string("notes", 256)

        tbl.boolean("completed").defaultTo(false).notNullable()

       
    })
    .createTable("project_res", tbl => {

        tbl.integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("project")
        .onUpdate("CASCADE")
        .onDelete("CASCADE")

        tbl.integer("resource_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("resource")
        .onUpdate("CASCADE")
        .onDelete("CASCADE")
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("project_res")
    .dropTableIfExists("project")
    .dropTableIfExists("resource")
    .dropTableIfExists("task")
};
