const {isArr, isPrototype, log} = require('../utils/helpers')

/* Find Longest Common Subsequence */

// lcs('dalbcmabcora', 'badlfmabcorfdga') => 'abc'
//  2 + lcs('ab', 'am')
// 			lcs('a', 'am') = 1 + lcs('ab', 'a') = 1
// 				lcs('', 'am') = 0 + lcs('a', 'a') = 1 + lcs('a', 'a') = 1 + lcs('ab', '') = 0
// Answer 3 ?

// 'vbcbrbfc', 'ambrc'
// 'bcbb' 'ambrc'
// 'cbb' 'ambrc'

// longest common subsequence
// work wrong
function lcs(str1 = '', str2 = '', sequence = '') {
	var tempSequence = ''
	var start = -1
	var tempStart = -1
	var shortStr1

	if (!str1.length || !str2.length) return ''

	for (var i = 0; i < str1.length; i++) {
		tempStart = str2.indexOf(str1[i], start)
		if (tempStart > -1) {
			start = tempStart + 1
			tempSequence += str1[i]
		}
	}

	if (tempSequence.length > sequence.length) {
		sequence = tempSequence
	}

	shortStr1 = str1.slice(1)

	if (sequence.length > shortStr1.length) {
		return sequence
	}

	return lcs(shortStr1, str2, sequence)
}

log(lcs('frholgl', 'afmbrrcopgflu'))

/*************/
/*** Object ***/
/*************/
// ({}, {a: 'b', a: {m: ''}})
function assignWithoutSymbols(target, ...sources) {
	return sources.reduce((acc, s) => {
		var descriptors = Object.getOwnPropertyDescriptors(s)
		return Object.defineProperties(acc, descriptors)
	}, target)
}

/*************/
/*** Array ***/
/*************/
function differenceWith(array, values, comparator) {
	return array.filter(a => !values.find(v => comparator(a, v)))
}

log(differenceWith(
	[{x: 1, y: 9}],
	[{x: 1, y: 10}, {x: 1, y: 8}],
	(arrVal, otherVal) => (
		// we can check palindrome checker
		Object.keys(arrVal).toString() === Object.keys(otherVal).toString() &&
		Object.values(arrVal).toString() === Object.values(otherVal).toString()
	))
)

function difference(array, ...values) {
	return array.filter(a => values.every(v => v.indexOf(a) === -1))
}

// log(difference([1,2, 8, 4], [2, 3], [1, 5, 4], [12, 1, 6]))

// _.compact([0, 1, false, 2, '', 3, {}]), creates array with all falsy
// values removed
function compact(array) {
	return array.filter(el => !!el)
}

// log(compact([0, 1, false, 2, '', 3]))

// _.chunk(array, [size=1])
// [1, 2, 3, 4, 5, 6], 3 => [[1,2,3], [4,5,6]]
// [1, 2, 3, 4, 5, 6], 4 => [[1,2,3,4], [5,6]]
// [1, 2, 3, 4, 5, 6], 5 => [[1,2,3,4,5], [6]]
// [1, 2, 3, 4, 5, 6], 6 => [[1, 2, 3, 4, 5, 6]]
function chunk(array, num) {
	var output = []
	var length = array.length
	var startIdx = 0

	while(startIdx < length) {
		output.push(array.slice(startIdx, start + num))
		start += num
	}

	return output
}

// log(chunk([1, 2, 3, 5, 6], 2))

