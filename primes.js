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

function isDivisible(a, b) {
	if (a % b) {
		return true;
	}
}

function isPrime(number) {
	let prime = true;
	for (let i = 2; i < number; i++) {
		if (!isDivisible(number, i)) {
			prime = false;
		}
	}
	return prime;
}

function findPrimes(numbers) {
	const primes = [];
	for (let d of numbers) {
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
						console.log("No peime numbers found!");
						resolve([]);
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
	console.log("Prime numbers found:", numbers);
	// Close the readline interface
	rl.close();
};

main();
