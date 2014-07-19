$(document).ready(function () {

	$('a').click(function () {

		text = $('#p'+$(this).attr('id')).text();
		$('#conteudo').text(text);
		return false;
	});


	$(function(){

		sizeFont = $('p').css('font-size').substring(0, 2);
		maxSize = 32;
		minSize = 10;

		$("#increase").click(function(){

			if(sizeFont <= maxSize){
				sizeFont++;
				$('#conteudo').css({'fontSize': sizeFont});
			}
		});

		$("#decrease").click(function(){

			if(sizeFont >= minSize){
				sizeFont--;
				$('#conteudo').css({'fontSize': sizeFont});
			}
		});

	});

	$('.color').click(function () {
		bgc = $(this).css('background-color').toString();

		$('body').css({'background-color': bgc});

		return false;
	});

});