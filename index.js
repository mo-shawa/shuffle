function shuffle(n) {
	const array = constructArray(n)
	// shuffle:
	for (let i = 0; i < n; i++) {
		// Find a random index within the array
		const random = Math.floor(Math.random() * n)
		// swap values of array at the current index with the random index value
		;[array[i], array[random]] = [array[random], array[i]]
	}

	console.log(array)
	return array
}

function constructArray(n) {
	if (n <= 0) return console.error("n must be a positive integer")

	let array

	if (n <= 256) array = new Uint8Array(n)
	else if (n <= 65_535) array = new Uint16Array(n)
	else if (n <= 4_294_967_295) array = new Uint32Array(n)
	// as n grows in size, using typed arrays becomes significantly more performant than dynamic arrays
	// 64 bit arrays are also available, but my laptop can't handle testing it :-)

	// This might seem unecessary, but after testing,
	// value assignment using a for loop was the most performant method
	for (let i = 0; i < n; i++) {
		array[i] = i + 1
	}

	return array
}

console.time("shuffle 50")
shuffle(50)
console.timeEnd("shuffle 50")

console.time("shuffle 5000")
shuffle(5000)
console.timeEnd("shuffle 5000")

/*  Uncomment below to see performance for 6+ digit n */

// console.time("shuffle 500,000")
// shuffle(500_000)
// console.timeEnd("shuffle 500,000")

// console.time("shuffle 5,000,000")
// shuffle(5_000_000)
// console.timeEnd("shuffle 5,000,000")

// console.time("shuffle 50,000,000")
// shuffle(50_000_000)
// console.timeEnd("shuffle 50,000,000")

// console.time("shuffle 500,000,000")
// shuffle(500_000_000)
// console.timeEnd("shuffle 500,000,000")
