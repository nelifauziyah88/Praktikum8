const db = require('./db');

// Model User (berisi query dasar)
const Product = {
    getAll: callback => {
        db.query('SELECT * FROM product', callback);
    },

    getById: (id, callback) => {
        db.query('SELECT * FROM product WHERE id = ?', [id], callback);
    },

    create: (data, callback) => {
        db.query('INSERT INTO product (nama, deskripsi, harga) VALUES (?, ?, ?)', [data.nama, data.deskripsi, data.harga], callback);
    },

    update: (id, data, callback) => {
        db.query('UPDATE product SET nama = ?, deskripsi = ?, harga = ? WHERE id = ?', [data.nama, data.deskripsi, data.harga, id], callback);
    },

    delete: (id, callback) => {
        db.query('DELETE FROM product WHERE id = ?', [id], callback);
    },
};

module.exports = Product;
