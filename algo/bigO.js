/*
* Write examples of O(n), O(n2)
* O(n) - two loops in function
* */

/*
Suppose we want to write two better solutions for code which one is better

What is better actually mean?
- Faster?
- Less memory-intensive?
- More readable?

Big O - is a way to formalize fuzzy counting

It allows us to talk formally about how the runtime of an algorithm
grows as the inputs grow
*/

// O(n)
function reduce(arr, acc = 0) {
	for (let i = 0; i < arr.length; i++) {
		acc += arr[i]
	}
	return acc
}

console.time('Total time execution')
reduce(Array(100000000).fill(2), 10)
console.timeEnd('Total time execution')