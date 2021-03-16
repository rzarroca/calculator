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

// numbers functionality

let storageValue = 0; // number variable

const numbers = document.querySelectorAll('.numbers');
numbers.forEach((number) => {
	number.addEventListener('click', function(e) {
		storageValue = storageValue.toString() + e.target.innerText;
		storageValue = parseFloat(storageValue);

		const display = document.querySelector('.display');
		display.innerText = storageValue;
	});
});
