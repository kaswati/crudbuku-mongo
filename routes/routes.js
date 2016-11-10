var express = require('express');
var router = express.Router();
var buku = require('../models/buku.js');

var controllers = require('.././controllers');

/* GET home page. */
router.get('/', controllers.homecontroller.index);

router.get('/registrasi', controllers.bukucontroller.getRegistrasi);
router.get('/buku', controllers.bukucontroller.getBuku);
router.post('/tambahbuku', controllers.bukucontroller.tambahBuku);
router.post('/hapusbuku', controllers.bukucontroller.hapusBuku);
router.get('/ubahbuku/:id', controllers.bukucontroller.ubahBuku);
router.post('/editbuku', controllers.bukucontroller.editBuku);



module.exports = router;
