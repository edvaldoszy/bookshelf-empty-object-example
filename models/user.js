module.exports = function extend(bookshelf) {
    const Model = bookshelf.Model.extend(
        {
            tableName: 'users',
            idAttribute: 'id',
            hidden: [],

            address() {
                return this.hasOne('Address', 'user_id');
            },
        },
    );

    return bookshelf.model('User', Model);
}
