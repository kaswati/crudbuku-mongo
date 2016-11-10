$(function(){

	//function ajax eliminar
	$('#tbl-buku #btn-hapus').click(function(e){
		e.preventDefault();
		var elemento = $(this)
		var id = elemento.parent().parent().find('#id').text();

		var confirmar = confirm('Apakah anda yakin?');

		if(confirmar){
			$.ajax({
			url: 'http://localhost:3000/hapusbuku',
			method : 'post',
			data : {id : id},
			success : function(res){
				if(res.res){
					elemento.parent().parent().remove();
				}
			}
			});

		}
	
	});
});