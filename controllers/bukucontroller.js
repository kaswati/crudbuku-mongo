var mysql = require('mysql');
var dateFormat = require('dateFormat');
//var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient,
	 assert = require('assert');
var ObjectId = require('mongodb').ObjectId;
var buku = require('../models/buku.js');
var mongoose = require('mongoose');


// Connection URL
var url = 'mongodb://localhost:27017/book';
//buku controller

module.exports = {

	

	tambahBuku : function(req, res, next){
		var waktuObj = new Date();
		var waktu = dateFormat(waktuObj, 'yyyy-mm-dd hh:MM:ss');

		var buku = {
			nama : req.body.nama,
			pengarang : req.body.pengarang,
			stok : req.body.stok,
			waktu_dibuat : waktu

		}

		MongoClient.connect(url, function(err, db){
			assert.equal(null, err);
			db.collection('buku').insertOne(buku, function(err, result){
				assert.equal(null, err);
				db.close();
			});
		});
		res.render('buku/registrasi', {info : ' Buku berhasil ditambahkan'});
	},


	getRegistrasi : function(req, res, next){
		res.render('buku/registrasi');
	},	

	getBuku :  function(req, res, next){
		var resultArray = [];
		MongoClient.connect(url, function(err, db){
			assert.equal(null, err);
			var cursor = db.collection('buku').find();
			cursor.forEach(function(doc, err){
				assert.equal(null, err);
				resultArray.push(doc);
			}, function(){
				db.close();
				res.render('buku/buku', {buku: resultArray});
			});
		});
	},

	hapusBuku : function(req, res, next){
		var id = req.body.id;

		MongoClient.connect(url, function(err, db){
			assert.equal(null, err);
			db.collection('buku').deleteOne({ "_id" : ObjectId(id) }, function(err, result){
				assert.equal(null, err);
				db.close();
			});
		
			
		});

	},

	ubahBuku : function(req, res, next){
		var id = req.params.id;
		var resultArray = [];
		MongoClient.connect(url, function(err, db){
			assert.equal(null, err);
			db.collection('buku').findOne({ _id: ObjectId(id) }, function(err, result){
				assert.equal(null, err);
				resultArray = result;
				db.close();
				res.render('buku/ubah', {resultArray:resultArray});

			});

		});

	},

	editBuku : function(req, res, next){

		var buku = {
			nama : req.body.nama,
			pengarang : req.body.pengarang,
			stok : req.body.stok
		};

		var id = req.body.id;

		MongoClient.connect(url, function(err, db){
			assert.equal(null, err);
			db.collection('buku').updateOne({ _id: ObjectId(id) },{$set: buku}, function(err, result){
				assert.equal(null, err);
				db.close();
			});

		});

		res.redirect('/buku');
	}

}