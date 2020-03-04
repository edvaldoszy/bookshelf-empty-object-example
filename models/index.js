const knex = require('./knex');
const createBookshelf = require('bookshelf');

const UserModel = require('./user');
const AddressModel = require('./address');


const bookshelf = createBookshelf(knex);

const User = UserModel(bookshelf);
const Address = AddressModel(bookshelf);

module.exports = { User, Address };
