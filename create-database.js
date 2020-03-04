const knex = require('./models/knex');


const createUsersTable = () => knex.schema
    .createTable('users', table => {
        table.increments('id')
            .unsigned()
            .primary();

        table.string('name', 100)
            .notNullable();

        table.boolean('active')
            .notNullable()
            .defaultTo(true);
    });

const insertUsers = () => knex('users')
    .insert([
        {
            id: 1,
            name: 'Edvaldo',
        },
        {
            id: 2,
            name: 'Douglas',
        },
        {
            id: 3,
            name: 'Bruna',
        },
        {
            id: 4,
            name: 'Elaine',
        },
    ]);


const createAddressesTable = () => knex.schema
    .createTable('addresses', table => {
        table.increments('id')
            .unsigned()
            .primary();

        table.string('street', 100)
            .notNullable();

        table.integer('user_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users');
    });

const insertAddresses = () => knex('addresses')
    .insert([
        {
            id: 1,
            street: 'Douglas\'s Street',
            user_id: 2,
        },
        {
            id: 2,
            street: 'Elaine\'s Street',
            user_id: 4
        },
    ]);


Promise.resolve()
    .then(createUsersTable)
    .then(insertUsers)
    .then(createAddressesTable)
    .then(insertAddresses)
    .then(_ => {
        console.log('Database created');
        process.exit(0);
    });
