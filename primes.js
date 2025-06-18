const readline = require("readline");
const process = require("process");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
const isValidInput = (input) => {
	// Must only contain digits and single spaces between them (no leading/trailing/multiple spaces)
	return /^\d+( \d+)*$/.test(input);
};

const getASetOfNumbers = (question) => {
	return new Promise((resolve) => {
		const askForInput = () => {
			rl.question(question, (answer) => {
				if (isValidInput) {
					const numbers = answer.split(" ").map((number) => +number);
					if (findPrimes(numbers)) {
						resolve(findPrimes(numbers));
					} else {
						resolve(console.log("No peimw numbers found!"));
					}
				} else {
					console.log(
						`Invalid format.
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
		"Enter a set of numbers. Seperate them by space: "
	);

	// Close the readline interface
	rl.close();
};

main();
// console.log("input", rl.input.buffer);

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
