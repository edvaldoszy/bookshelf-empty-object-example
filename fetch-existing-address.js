const { User } = require('./models');


User.where('name', 'in', ['Edvaldo', 'Douglas', 'Bruna'])
    .fetchAll({
        withRelated: ['address'],
    })
    .then(users => {
        console.log('At least one with address');
        console.log(JSON.stringify(users, null, 4));

        process.exit(0);
    });
