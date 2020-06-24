// indexOf
// includes
// find
// findIndex

// Knuth–Morris–Pratt (KMP) Pattern Matching Substring Search
// https://www.youtube.com/watch?v=BXCEFAzhxGY
// KMP Substring Search
// ABAABA
// AB
// Find all the patterns that matches in a given string `str`
// this algorithm is based on the Knuth–Morris–Pratt algorithm. Its beauty consists in that it performs the matching in O(n)

// Construct a table with table[i] as the length of the longest prefix of the substring 0..i

function myLongestPrefix(str) {
	var table = new Array(str.length)
	var maxPrefix = 0
	console.log(table)
}

myLongestPrefix('dd')

function longestPrefix(str) {
	/*
	* |0|1|2|3|4|5|6|7|8|
	* |d|d|m|b|a|а|m|b|a|
	* */
	// create a table of size equal to the length of `str`
	// table[i] will store the prefix of the longest prefix of the substring str[0..i]
	var table = new Array(str.length);
	var maxPrefix = 0;
	// the longest prefix of the substring str[0] has length
	table[0] = 0;

	// for the substrings the following substrings, we have two cases
	for (var i = 1; i < str.length; i++) {
		// case 1. the current character doesn't match the last character of the longest prefix
		while (maxPrefix > 0 && str.charAt(i) !== str.charAt(maxPrefix)) {
			// if that is the case, we have to backtrack, and try find a character  that will be equal to the current character
			// if we reach 0, then we couldn't find a character
			maxPrefix = table[maxPrefix - 1];
		}
		// case 2. The last character of the longest prefix matches the current character in `str`
		if (str.charAt(maxPrefix) === str.charAt(i)) {
			// if that is the case, we know that the longest prefix at position i has one more character.
			// for example consider `-` be any character not contained in the set [a-c]
			// str = abc----abc
			// consider `i` to be the last character `c` in `str`
			// maxPrefix = will be 2 (the first `c` in `str`)
			// maxPrefix now will be 3
			maxPrefix++;
			// so the max prefix for table[9] is 3
		}
		table[i] = maxPrefix;
	}
	return table;
}

console.log(longestPrefix('ddmbaаmba'))

function kmpMatching(str, pattern) {
	// find the prefix table in O(n)
	var prefixes = longestPrefix(pattern);
	var matches = [];

	// `j` is the index in `P`
	var j = 0;
	// `i` is the index in `S`
	var i = 0;
	while (i < str.length) {
		// Case 1.  S[i] == P[j] so we move to the next index in `S` and `P`
		if (str.charAt(i) === pattern.charAt(j)) {
			i++;
			j++;
		}
		// Case 2.  `j` is equal to the length of `P`
		// that means that we reached the end of `P` and thus we found a match
		if (j === pattern.length) {
			matches.push(i-j);
			// Next we have to update `j` because we want to save some time
			// instead of updating to j = 0 , we can jump to the last character of the longest prefix well known so far.
			// j-1 means the last character of `P` because j is actually `P.length`
			// e.g.
			// S =  a b a b d e
			// P = `a b`a b
			// we will jump to `a b` and we will compare d and a in the next iteration
			// a b a b `d` e
			//     a b `a` b
			j = prefixes[j-1];
		}
		// Case 3.
		// S[i] != P[j] There's a mismatch!
		else if (str.charAt(i) !== pattern.charAt(j)) {
			// if we have found at least a character in common, do the same thing as in case 2
			if (j !== 0) {
				j = prefixes[j-1];
			} else {
				// otherwise, j = 0, and we can move to the next character S[i+1]
				i++;
			}
		}
	}

	return matches;
}

// substringInLongestString
// use cases:
// 1. count the number of times a smaller strings appears in longer string
// 2. checking pairs of characters individually

// omgbujomghj, omg
function naiveSearch(long, short) {
	let count = 0

	if (!short.length) return count

	for (let i = 0; i < long.length; i++) {
		for (let j = 0; j < short.length; j++) {
			if (short[j] !== long[i + j]) break
			if (j === short.length - 1) count++
		}
	}

	return count
}

console.log(naiveSearch('omgbuomgjomgfgfgfg', 'omg'))

function myNaiveStringSearch(longestStr, str) {
	let count = 0
	for (let i = 0; i < longestStr.length; i++) {
		if (longestStr[i] === str[0]) {
			for (let j = 1; j < str.length; j++) {
				if (longestStr[i + j] !== str[j]) {
					break
				}
				if (longestStr[i + j] === str[j] && str.length - 1 === j) {
					count += 1
				}
			}
		}
	}
	return count
}

// console.log(myNaiveStringSearch('omgbuomgjfdfdggdomgomghj', 'omg'))

// faster than linear search
// works only for sorted arrays
// [1, 2, 3, 5, 8, 10, 12, 15]
//  S		 M				E
// [1, 2, 3, 5, 8, 10, 12, 15]
// 	S  M  E
// [1, 2, 3, 5, 8, 10, 12, 15]
// SME
function binarySearch(arr, val) {
	let start = 0
	let end = arr.length - 1
	// returns the largest integer less than or equal to a given number
	let middle = Math.floor((start + end) / 2)

	if (val < arr[start] || val > arr[end]) return -1

	while (arr[middle] !== val) {
		if (arr[middle] > val) end = middle - 1
		else start = middle + 1
		middle = Math.floor((start + end) / 2)
	}

	return arr[middle] === val ? middle : -1
}
// console.log(binarySearch([1, 2, 3, 5, 8, 10, 12, 15], 1000))

function linearSearch(arr, val) {
	let isFound = -1

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === val) return i
	}

	return isFound
}

// console.log(linearSearch([34,5,45], 6))