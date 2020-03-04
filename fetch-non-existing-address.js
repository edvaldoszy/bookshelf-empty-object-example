const { User } = require('./models');


User.where('name', 'in', ['Edvaldo', 'Bruna'])
    .fetchPage({
        withRelated: ['address'],
    })
    .then(users => {
        console.log('No one with address');
        console.log(JSON.stringify(users, null, 4));

        process.exit(0);
    });
