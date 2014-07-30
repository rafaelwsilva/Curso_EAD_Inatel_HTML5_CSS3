$(document).ready(function(){

	$("#destaqueGame").modal('show');
});

$(".link-menu").click(function(e){

	e.preventDefault();
	var href = $(this).attr('href');
	
	if(href == ""){
		$("#text-index").show();
		$("#output").hide();
	}else{
		$("#text-index").hide();
		$("#output").show();
		$("#output").load(href);
	}
});