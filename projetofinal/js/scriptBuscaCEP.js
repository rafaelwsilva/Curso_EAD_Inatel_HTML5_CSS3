$(document).ready(function () {
	
	$("#form").submit(function(){
		var cep= $('#inputCep').val();
		cep= cep.replace(/\D/g,"");

		$.ajax({
			url:"http://cep.correiocontrol.com.br/"+cep+".json",
			data: '',
			dataType: 'json',
			success: function( data ) {
				console.log(data);
				$('#outputCEP').show();

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

	$("#inputCep").on("keypress",function (){
		maskCep(this);
		return isNumber(event);
	});

});



function isNumber(e){
	var key=(window.event)?event.keyCode:e.which;   
	if((key>47 && key<58)) 
		return true;
	else  
		return false;
	
}

function maskCep(phone){ 
	if(phone.value.length == 5)
		phone.value = phone.value+'-';

	
}