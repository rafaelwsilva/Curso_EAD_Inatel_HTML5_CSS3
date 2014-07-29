$(document).ready(function () {

	$("#name").blur(function(){
		validateName();
	});

	$("#password").blur(function(){
		password = 	$("#password").val();

		if (!validatePassword(password)) { 
			$("#password").addClass("invalid");
			$('#msgPassword').show();
		}else{
			$("#password").removeClass("invalid");
			$('#msgPassword').hide();	
		}	

	});

	$("#cpf").blur(function(){
		if(validateCpf($("#cpf").val())){
			$("#cpf").removeClass("invalid");
			$('#msgCpf').hide();
		}else{
			$("#cpf").addClass("invalid");
			$('#msgCpf').show();
			
		}
	});

	$("#email").blur(function(){
		if(validateEmail($("#email").val())){
			$("#email").removeClass("invalid");
			$('#msgEmail').hide();	
		}else{
			$("#email").addClass("invalid");
			$('#msgEmail').show();
		}


	});

	$("#phone").on("keypress",function (){
		maskPhone(this);
		return isNumber(event);
	});

	$("#cpf").on("keypress",function (){
		if(isNumber(event)){
			maskCpf(this);
			return true;
		}else{
			return false;
		}
	});
});

function validateName(){
	if($("#name").val().length < 10){
		$("#name").addClass("invalid");
		$('#msgName').show();	
	}else{
		$("#name").removeClass("invalid");
		$('#msgName').hide();
	}
}

function validatePassword(password){

	if(password.length<6)
		return false;

	var regex = /[a-zA-Z]/;
	if (!regex.test(password))
		return false;

	var regex = /[0-9]/;
	if (!regex.test(password))
		return false;

	return true;
}

function validateCpf(cpf){  
	cpf = cpf.replace(/[^\d]+/g,'');

	if (cpf.length != 11 || 
		cpf == "00000000000" || 
		cpf == "11111111111" || 
		cpf == "22222222222" || 
		cpf == "33333333333" || 
		cpf == "44444444444" || 
		cpf == "55555555555" || 
		cpf == "66666666666" || 
		cpf == "77777777777" || 
		cpf == "88888888888" || 
		cpf == "99999999999") return false;

		
		add = 0;
	for (i=0; i < 9; i ++)
		add += parseInt(cpf.charAt(i)) * (10 - i);
	rev = 11 - (add % 11);
	if (rev == 10 || rev == 11)
		rev = 0;
	if (rev != parseInt(cpf.charAt(9)))
		return false;
	add = 0;
	for (i = 0; i < 10; i ++)
		add += parseInt(cpf.charAt(i)) * (11 - i);
	rev = 11 - (add % 11);
	if (rev == 10 || rev == 11)
		rev = 0;
	if (rev != parseInt(cpf.charAt(10)))
		return false;

	return true;

}

function validateEmail(email) {
	if ((email.length != 0) && (email.indexOf("@") < 1))
		return false;
	if (email.indexOf('.') < 4)
		return false;
	if (email == "")
		return false;
	return true;
}

function maskCpf(cpf){ 
	if(cpf.value.length == 3)
		cpf.value= cpf.value+'.';
	if(cpf.value.length == 7)
		cpf.value= cpf.value+'.';
	if(cpf.value.length == 11)
		cpf.value= cpf.value+'-';
}

function maskPhone(phone){ 
	if(phone.value.length == 0)
		phone.value = '('+phone.value;

	if(phone.value.length == 3)
		phone.value = phone.value+') ';

	if(phone.value.length == 9)
		phone.value = phone.value+'-'; 
}


function isNumber(e){
	var key=(window.event)?event.keyCode:e.which;   
	if((key>47 && key<58)) return true;
	else{
		if (key==8 || key==0) return true;
		else  return false;
	}
}
