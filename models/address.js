module.exports = function extend(bookshelf) {
    const Model = bookshelf.Model.extend(
        {
            tableName: 'addresses',
            idAttribute: 'id',
            hidden: [
                'user_id',
            ],

            user() {
                this.belongsTo('User', 'user_id', 'id');
            }
        },
    );

    return bookshelf.model('Address', Model);
}
