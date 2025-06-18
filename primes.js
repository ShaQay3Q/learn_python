const readline = require("readline");
// const { stdin: input, stdout: output } = require('node:process');
const process = require("process");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const getASetOfNumbers = (question) => {
	return new Promise((resolve) => {
		rl.question(question, (answer) => {
			resolve(answer);
		});
	});
};

// Main async function
const main = async () => {
	// Get user input using await
	const numbers = await getASetOfNumbers(
		"Enter a set of numbers. Seperate them by space: "
	);

	// Print the result
	console.log(`Entered numbers: ${numbers}`);

	// Close the readline interface
	rl.close();
};

main();

function isDivisible(a, b) {
	if (a % b === 0) {
		return true;
	}
}

function isPrime(number) {
	const divisibleCount = [];
	for (let i = number; i > 0; i--) {
		if (isDivisible(number, i)) {
			divisibleCount.push(true);
		}
	}
	if (divisibleCount.length < 3) {
		return true;
	}
}

function findPrimes(numArr) {
	const primes = [];
	for (let d of numArr) {
		if (d !== 0) {
			if (isPrime(d)) {
				primes.push(d);
			}
		}
	}
	return primes;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(findPrimes(numbers));
// console.log(findPrimes([...Array(100).keys()]));
