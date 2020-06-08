'use strict'

const {isObject, isPrototype, log} = require('../utils/helpers')

// https://www.codementor.io/@nihantanu/21-essential-javascript-tech-interview-practice-questions-answers-du107p62z

// What is the drawback of creating true private methods in JS
var Employee = function () {
	// Private method
	var privateMethod = function () {
		this.salary = this.salary + 1000;
	}
}
// they are very memory-inefficient, as new copy of the method
// would be created for each instance

// https://www.toptal.com/javascript/interview-questions

// Closure?
// Function which has access to outer variables

// The following recursive code will cause a stack overflow if the
// array list is too large. How can you fix this and still retain
// the recursive pattern?

var hugeList = [1, 2, 3];

// callstack
var nextListItem = function() {
	var item = hugeList.pop()
	if (item) nextListItem()
}

// event loop
var nextListItem = function() {
	var item = hugeList.pop()
	if (item) setTimeout(nextListItem, 0)
}

// write a sum(2)(3)(5) = sum (2, 3, 5) ?

// es5
function carryEs5(func) {
	function slice(collection) {
		return Array.prototype.slice.call(collection)
	}
	return function callback() {
		var callBackArgs = slice(arguments)
		if (callBackArgs.length >= func.length) {
			return func.apply(this, callBackArgs)
		} else {
			return function skip() {
				var skipArgs = slice(arguments)
				return callback.apply(this, callBackArgs.concat(skipArgs))
			}
		}
	}
}

// es6
function carryEs6(func) {
	return function callback(...args1) {
		if (args1.length >= func.length) {
			return func.apply(this, args1)
		} else {
			return function skip(...args2) {
				return callback.apply(this, args1.concat(args2))
			}
		}
	}
}

var sumEs5 = carryEs5(function (a, b, c) {
	return a + b + c
})

var sumEs6 = carryEs6(function (a, b, c) {
	return a + b + c
})

log(sumEs5(1)(4)(9))
log(sumEs5(1)(4,9))

log(sumEs6(88,2,14))
log(sumEs6(1,5,6))

// Write function which check if palindrome
function isPalindromeOne(val) {
	var isValid = true
	for (let i = 0; i < val.length; i++) {
		if (val[i] !== val[val.length - 1 - i]) {
			isValid = false
			return isValid
		}
	}
	return isValid
}

function isPalindromeTwo(str) {
	str = str.replace(/\W/g, '').toLowerCase()
	return str === str.split('').reverse().join('')
}

log('Palindrome checking')
console.log(isPalindromeOne('malayalam'))
console.log(isPalindromeOne('malayalam'))
console.log(isPalindromeTwo("A car, a man, a maraca"))

// Discuss possible ways to write a function isInteger(x) that
// determines if x is an integer.

// wrong
// function isInteger(x) {
// 	typeof x === 'number' || toString.call(x) === '[object Number]'
// }

// es6
var isInteger = function(x) {
	return Number.isInteger(x)
}

// es5
var isInteger = function(x) {
	return typeof x === 'number' && x % 1 === 0
}

// use strict?
// The short and most important answer here is that use strict is a way
// to voluntarily enforce stricter parsing and error handling on your
// JavaScript code at runtime.

// reason of using iife?
// 1. enclosed lexical scope
// 2. preventing polluting the global scope

// what print in console?
var myObject = {
	foo: "bar",
	func: function() {
		var self = this;
		log("outer func:  this.foo = " + this.foo);
		log("outer func:  self.foo = " + self.foo);
		(function() {
			// this.foo - undefined
			log("inner func:  this.foo = " + this.foo);
			log("inner func:  self.foo = " + self.foo);
		}());
	}
};
myObject.func();

// check object
log(isObject({}))
log({}.constructor === Object)