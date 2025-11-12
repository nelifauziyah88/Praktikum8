const User = require('../models/user.model'); //memanggil model

// GET semua user
exports.getAllUsers = (req, res) => {
    User.getAll((err, results) => { //ambil dari models
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};

// GET user berdasarkan ID
exports.getUserById = (req, res) => {
    const id = req.params.id;
    User.getById(id, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0) return res.status(404).json({ message: 'User tidak ditemukan' });
        res.json(results[0]);
    });
};

// POST buat user baru
exports.createUser = (req, res) => {
    const data = req.body;
    User.create(data, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ id: result.insertId, ...data });
    });
};

// PUT update user berdasarkan ID
exports.updateUser = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    User.update(id, data, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        if (result.affectedRows === 0) return res.status(404).json({ message: 'User tidak ditemukan' });
        res.json({ message: 'User berhasil diupdate' });
    });
};

// DELETE user berdasarkan ID
exports.deleteUser = (req, res) => {
    const id = req.params.id;
    User.delete(id, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        if (result.affectedRows === 0) return res.status(404).json({ message: 'User tidak ditemukan' });
        res.json({ message: 'User berhasil dihapus' });
    });
};

