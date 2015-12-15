function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
} 

var apples = {
	name: 'apples',
	price: 9.99
};

var oranges = {
	name: 'oranges',
	price: .50
};

var bananas = {
	name: 'bananas',
	price: .60
};

var pears = {
	name: 'pears',
	price: 9.77
}

var fruitArray = [apples, oranges, bananas, pears];

console.log(fruitArray);
// console.log(randomNumber(-50, 50));

// var change = (randomNumber(-50, 50))/100;
// console.log(change);

function toCents(){
	var change = (randomNumber(-50, 50))/100;
	// console.log(change);
	return change;
}
// Runs through one time okay, but then it says that kittyFoo.toFixed is not a function.
function changePrices (array) {
	for(var i=0; i<array.length; i++){
		var adjustment = toCents();
		var kittyFoo = array[i].price+adjustment;
		array[i].price = Number(kittyFoo.toFixed(2));
		// console.log(array[i].price);
	
		var currentPrice = array[i].price;
		if (currentPrice < .50){
			currentPrice = .50;
		} else if (currentPrice > 9.99) {
			currentPrice = 9.99;
		} else {
			currentPrice = currentPrice;
		}
		console.log(currentPrice);

	}
}


//we need to append the average price for each commodity to the span in the p tag in html.
//Double check that we need to display the current price vs. average price.
//Average price would require storing current value and making another function.
function test(){
	setInterval(function(){changePrices(fruitArray)}, 3000);
}

test();

// var myVar;

// function myFunction() {
//     myVar = setInterval(changePrices, 3000);
// }

// function alertFunc() {
//     alert();
// }

// console.log(changePrices(fruitArray));
// var test = toCents();
// console.log(test);
// console.log(change);
// setInterval(randomNumber)