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

// NUMBERPAD FUNCTIONALITY

let displayValue = 0;
const display = document.querySelector('.display');

const numbers = document.querySelectorAll('.numbers');
numbers.forEach(number => {
	number.addEventListener('click', function(e) {
		switch (e.target.id) {
			case 'comma':
				if (displayValue.indexOf('.') === -1) {
					displayValue = displayValue + '.';
				}
				break;
			case 'sign':
				displayValue = (displayValue*-1).toString();
				break;
			default:
				displayValue = displayValue + e.target.innerText;
				displayValue = parseFloat(displayValue).toString();
				break;
		}
				
		display.innerText = displayValue;
	})
});

// OPERATION FUNCTIONALITY

let operation = '';
let containerValue = 0;
let result = 0;

const operators = document.querySelectorAll('.operators')
operators.forEach(element => {
	element.addEventListener('click', function(e) {
		containerValue = parseFloat(displayValue);
		displayValue = 0;
		
	})
});
