$(function(){
	$('.form-registrasi form').form({
		nombre	: {
			identifier : 'nama',
			rules : [
				{
					type : 'empty',
					prompt : 'Nama Harus di Isi'
				}
			]
		},

		pengarang	: {
			identifier : 'pengarang',
			rules : [
				{
					type : 'empty',
					prompt : 'Pengarang Harus di Isi'
				}
			]
		},

		stok	: {
			identifier : 'stok',
			rules : [
				{
					type : 'empty',
					prompt : 'Stok Harus di Isi'
				},
				{
					type : 'integer',
					prompt : 'Stok Harus Angka'
				}
			]
		}
	});
});