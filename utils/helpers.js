const getType = val => {
	var type = toString.call(val)
	return type.slice(8, type.length - 1)
}
const isPrototype = value => {
	var Ctor = value && value.constructor
	var proto = (typeof Ctor == 'function' && Ctor.prototype) || Object.prototype
	return value === proto
}
const isObject = val => getType(val) === 'Object'
const isArr = arr => Array.isArray(arr)
const isInteger = x => typeof x === 'number' && x % 1 === 0
const isNaN = x => Number.isNaN(x)

const log = text => console.log(text)
const logT = obj => console.table(obj)

module.exports = {
	isObject,
	isPrototype,
	isArr,
	isInteger,
	isNaN,
	log,
	logT
}