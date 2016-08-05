

$(document).ready(function(){

	$("#btnCalculateChange").click(function(){
		
	// create an if/else statement so that user must input must be greater than 0
	if ($("#saleAmount").val() > 0 && $("#payment").val() >0){

		// give the change a numerical value
		var dollars= 1.00;
		var quarters= 0.25;
		var dimes= 0.1;
		var nickles= 0.05;
		var pennies= 0.01;

		// assign variables to the user input
		var saleAmount= $("#saleAmount").val();
		var payment= $("#payment").val();

		// assign the varialbe for the change due & multiply by -1 to provide a positive number
		var changeDue= payment - saleAmount;
		console.log("total change owed " + changeDue);

		var dollarsDue= Math.floor(changeDue);
		console.log("dollars= " + dollarsDue);
		
		var quartersDue= (changeDue % dollarsDue)*4;
		console.log("quarters= " + quartersDue);
		
		
		var dimesDue;
		var nicklesDue;
		var penniesDue;
		
		$("#outputDollars").text(dollarsDue);
		$("#outputQuarters").text(quartersDue);
		$("#outputDimes").text(dimesDue);
		$("#outputNickles").text(nicklesDue);
		$("#outputPennies").text(penniesDue);

	} else {
		alert("Sorry, those are not valid input amounts!");
	}
		
	});

});