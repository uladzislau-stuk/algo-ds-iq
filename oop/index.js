const {log, logT} = require('../utils/helpers')

// Enumerable properties are those properties whose internal enumerable
// flag is set to true, which is the default for properties created via
// simple assignment or via a property initializer (properties defined
// via Object.defineProperty and such default enumerable to false).

// constructor
function Person(name) {
	this.name = name
	this.getPerson = function () {
		return this.name
	}

	var privateGetPerson = () => {
		return this.name
	}
}

Person.prototype.greeting = function() {
	log('Hi! I\'m ' + this.name + '.');
}

// constructor
function Teacher(name) {
	Person.call(this, name)
	this.age = 21
}

// Teacher.prototype = Object.create(Person.prototype)
// Teacher.prototype.constructor = Teacher

Object.setPrototypeOf(Teacher, Person.prototype)

// list all enumerable and non-enumerable properties

// log(Object.getOwnPropertyNames(Person.prototype)) // [ 'constructor', 'greeting' ]
// log(Teacher.__proto__) // [ 'constructor' ]w

