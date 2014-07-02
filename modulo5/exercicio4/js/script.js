$("#form").submit(function(){
	var cep= $('#inputCep').val();
	cep= cep.replace(/\D/g,"");

	$.ajax({
		url:"http://cep.correiocontrol.com.br/"+cep+".json",
		data: '',
		dataType: 'json',
		success: function( data ) {
			console.log(data);
			$('#output').show();

			$('#logradouro').html(data.logradouro);
			$('#bairro').html(data.bairro);
			$('#cidade').html(data.localidade);
			$('#uf').html(data.uf);
			$('#cep').html(data.cep);
		}
	});
	$("#form :input").each( function() {
		$(this).val('');
	});
	return false;
});


