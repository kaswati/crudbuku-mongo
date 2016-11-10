var mongoose = require('mongoose');

var bukuSchema = new mongoose.Schema({
	nama: String,
	pengarang: String,
	stok: Number
});

module.exports = mongoose.model('buku', bukuSchema);