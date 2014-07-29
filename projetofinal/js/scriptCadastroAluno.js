$(document).ready(function () {

	//Global variables
	var students = new Array();
	
	$("#orderByName").prop("disabled", true);
	$("#orderByGrade").prop("disabled", true);

	$("#formStudents").submit(function(){
		name = $("#name").val();
		grade =  parseFloat($("#grade").val());
		students.push([name, grade]);

		$('<li>',{
			text : name
		}).appendTo($("#outputStudents"));

		$('<li>',{
			text : grade
		}).appendTo($("#outputGrades"));

		$("input[type='text']").val("");

		$("#name").focus();

		if(students.length>9){
			$("#save").prop("disabled", true);
			$("input").prop("disabled", true);
			$("#avg").text(average(students));
			$("#average").show();
		}
		
		if(students.length==1){
			$("#orderByName").prop("disabled", false);
			$("#orderByGrade").prop("disabled", false);
		}

		return false;
	});

	$("#orderByName").click(function(){
		students = students.sort(function(a,b) {
			return a[0].toUpperCase() > b[0].toUpperCase();
		});

		$("#outputStudents").html("");
		$("#outputGrades").html("");

		for (var i = 0; i < students.length; i++) {
			$('<li>',{
				text : students[i][0]
			}).appendTo($("#outputStudents"));

			$('<li>',{
				text : students[i][1]
			}).appendTo($("#outputGrades"));		
		};	
	});

	$("#orderByGrade").click(function(){
		students = students.sort(function(a,b) {
			return a[1] < b[1];
		});

		$("#outputStudents").html("");
		$("#outputGrades").html("");

		for (var i = 0; i < students.length; i++) {
			$('<li>',{
				text : students[i][0]
			}).appendTo($("#outputStudents"));

			$('<li>',{
				text : students[i][1]
			}).appendTo($("#outputGrades"));		
		};	
	});

	$("#grade").on("keypress",function (){
		return isNumber(event);
	});

});


function average(students){
	avg=0;
	for (var i = students.length - 1; i >= 0; i--) {
		avg = avg+students[i][1];
	};

	avg = (avg/students.length);

	return avg;
}

function isNumber(e){
	var key=(window.event)?event.keyCode:e.which;   
	if((key>47 && key<58)) return true;
	else{
		if (key==8 || key==0 || key==46) return true;
		else  return false;
	}
}