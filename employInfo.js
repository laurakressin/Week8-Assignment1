

$(document).ready(function() {
$("form").submit(function( event ) {
	event.preventDefault();

	var thisVal = $( "input:first" ).val();
	console.log(thisVal);


	var $inputs = $("input");
	var employees = {};

	$inputs.each(function(){
		employees[this.name] = $(this).val();

	});
	console.log(employees);

	var $myObject = $("<li>" + employees.firstName + " " + employees.lastName + ", " 
		+ "Employee Number: " + employees.employNum + ", " 
		+ employees.title 
		+ ", Last Review Score: " +'<span class = "score' + employees.lastRevScore +'">' + employees.lastRevScore + '</span>' 
		+ ", Salary: $" + employees.salary + "<button class=remove>Remove</button></li>");
	$(".content").append($myObject);
console.log(employees.lastRevScore);
	// if(employees.lastRevScore == 1 || employees.lastRevScore == 3) {
	// 	$($myObject).addClass("reviewOne");
	// } else if(employees.lastRevScore == 2){
	// 	$($myObject).addClass("reviewTwoThree");
	// } else if (employees.lastRevScore == 4 || employees.lastRevScore == 5) {
	// 	$($myObject).addClass("reviewFourFive");
	// };



	// $("input[type=submit]").click(function() {
    $(this).closest("form").find("input[type=text]").val("");

    $("button").on("click", function(){
		$(this).closest("li").remove();
});

})
});

// });
