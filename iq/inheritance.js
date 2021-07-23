class Foo {}
typeof Foo

// CLASS INHERITANCE
// Example #1
function f(phrase) {
  return class {
    sayHi() { alert(phrase); }
  };
}

class Car extends f('my phrase') {
  constructor(brand) {
    super();
    this.carname = brand;
  }
  present() {
    return 'I have a ' + this.carname;
  }
}

// Example #2
class BaseList {
  constructor({ length = 20 }) {
    Object.assign(this, {length})
  }
  getName() {
    return 'BaseList';
  }
}
class ProductList extends BaseList {
  constructor(options = {}) {
    super(options)
    this.itemHeight = 100
  }
}

class PeopleList extends BaseList {
  constructor(options = {}) {
    super(options)
    this.itemHeight = 50
  }
}

const productList = new ProductList();
const peopleList = new PeopleList();

// console.log(productList.getName === peopleList.getName) // true

// COMPOSITIONAL/CLONING/MIXING INHERITANCE
// SEE OPEN-CLOSED PRINCIPLE IN solid.js
// https://medium.com/javascript-scene/3-different-kinds-of-prototypal-inheritance-es6-edition-32d777fa16c9


// FUNCTIONAL INHERITANCE
// use factory function and then attaches new properties using
// concatenative inheritance
const baseMixin1 = function () {
  const state = {
    type: 'baseMixin1'
  }
  return Object.assign({
    getBaseMixin1Type() {
      return state.type;
    }
  })
}

const baseMixin2 = function () {
  const state = {
    type: 'baseMixin2'
  }
  return Object.assign({
    getBaseMixin2Type() {
      return state.type;
    }
  })
}

const exportedMixin = function () {
  const proto1 = Object.assign(Object.create(baseMixin1()), baseMixin2())
  const proto2 = Object.create(proto1);
  
  return (
    Object.assign(proto2, {
      getSomething() {
        return 'something'
      }
    })
  )
}

// exportedMixin -> baseMixin2 -> baseMixin1 -> Object
console.log(exportedMixin())
