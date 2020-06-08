const {isArr, isPrototype, log} = require('../utils/helpers')


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

