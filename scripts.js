//declaration of simplest operations

function add(a, b) {
	return a + b;
}

function rest(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	return a / b;
}

//make user operator choise

function getOperation() {
	let a = Number(prompt('Choose first number', '4'));
	let operator = prompt('Choose operation', 'add').toLowerCase();
	let b = Number(prompt('Choose second number', '2'));
	return window[operator](a,b);
}


/*
function sum (array) {
	return array.reduce((total, number) => total + number, 0)
}

function multiply (array) {
	return array.reduce((total, number) => total * number, 1)
}

function power(a, b) {
	return a**b;
}

function factorial(num) {
	let sum = 1;
	for (let i = num; i > 0; i--) {
		sum *= i;
	}
	return sum;
}
*/
