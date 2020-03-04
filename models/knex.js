const createKnex = require('knex');

module.exports = createKnex({
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
        filename: './example.sqlite',
        decimalNumbers: true,
    },
});
