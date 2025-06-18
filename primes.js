const readline = require("readline");
const process = require("process");

// Must only contain digits and single spaces between them (no leading/trailing/multiple spaces)
const regPattern = /^\d+(\s+\d+)*$/;

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
const isValidInput = (input) => regPattern.test(input.trim());
const parseInput = (input) => input.split(/\s+/).map(Number);

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

const getASetOfNumbers = (question) => {
	return new Promise((resolve) => {
		const askForInput = () => {
			rl.question(question, (answer) => {
				if (isValidInput(answer)) {
					const numbers = parseInput(answer);
					const primes = findPrimes(numbers);

					if (primes.length) {
						resolve(findPrimes(numbers));
					} else {
						resolve(console.log("No peime numbers found!"));
					}
				} else {
					console.log(
						`Invalid Input!
Please enter numbers separated by **single spaces**, like: 12 34 56`
					);
					askForInput();
				}
			});
		};
		askForInput();
	});
};

// Main async function
const main = async () => {
	// Get user input using await
	const numbers = await getASetOfNumbers(
		"Enter a valid set of numbers. Seperate them by space: "
	);

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

// console.log(findPrimes(numbers));
// console.log(findPrimes([...Array(100).keys()]));
