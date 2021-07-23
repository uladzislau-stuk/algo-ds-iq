const person = {
  isHuman: false,
  printIntroduction: function() {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  }
};

const me = Object.create(person, {
  length: {
    value: 2,
    writable: true
  }});

/*
 * FACTORY FUNCTION
 * */
class Parent {
  #privateName = 'Super Parent';
  _protectedName = 'Super Parent';
  
  logName() {
    console.log(this.#privateName)
  }
}

const parent1 = new Parent();
parent1.logName();

// let's make factory
const parent = () => {
  const name = 'Super Parent';
  
  const logName = () => console.log(name);
  
  return {
    logName
  }
}

const parent2 = parent();
parent2.logName();


/*
*
* COMPOSITION OVER INHERITANCE
*
* (classical inheritance brings
* an issue such as gorilla and banana)
*
* You should take composition pattern since
* inheritance encourages you to predict using of this
* in the project
*
* Composition more flexible and really easy to do extend
* "Inheritance encourages you to build this taxonomy of objects very early on in the project. And you are most likely going to make big design mistakes while doing that. Because humans cannot predict the future."
 
 "I think it's just better to use composition from the start. It's more flexible, it's more powerful, and it's really easy to do."
 
 * */
const filter = (state) => ({
  filterMonkeySkillsByEat: () => state.skills.filter(s => s.skill !== 'eat')
});

const factoryFunction = () => {
  const state = {
    bananasPerDay: 10,
    animal: 'monkey',
    skills: []
  }
  return Object.assign(
    {},
    filter(state),
    // ... you can easily extend factory function such way
  )
}

const monkey = factoryFunction();
monkey.filterMonkeySkillsByEat();


/*
* SINGLE RESPONSIBILITY PRINCIPLE
*
* A class should have one and only one reason to
* change, meaning that a class should only have
* one job.
* */
const circle = (radius) => {
  const proto = {
    type: 'Circle',
    getType() {return this.type}
  }
  return Object.assign(Object.create(proto), {radius})
}

// const square = (length) => {
//   const proto = {
//     type: 'Square',
//   }
//   return Object.assign(Object.create(proto), {length})
// }
//
// const shapes = [
//   circle(5),
//   square(1),
//   square(2),
// ]
//
// const areaCalculator = (shapes) => {
//   const proto = {
//     sum() {
//       // logic
//     },
//   }
//   return Object.assign(Object.create(proto), {shapes})
// }

// if user wants to output it in specific format
// we can create another factory function
// const outputAreaInFormat = (area) => {
//   const proto = {
//     outputHTML() {
//       // logic
//     },
//     outputJSON() {
//
//     }
//   }
//   return Object.assign(Object.create(proto), {area})
// }
//
// const area = areaCalculator(shapes)
// const outputHTML = outputAreaInFormat(area).outputHTML()


/*
* OPEN-CLOSED Principle
*
* Objects or entities should be open for
* extension, but closed for modification.
* */
const shape = (state) => ({
  type: 'Shape',
  area: () => state.area(state)
});

const square = (length) => {
  const state = {
    length,
    type: 'Square',
    area : () => Math.pow(state.length, 2)
  };
  
  return Object.assign(
    Object.create(shape(state)),
    state
  );
}

const areaCalculator = (areas) => {
  return {
    sum() {
      if (!Array.isArray(areas)) {
        throw 'areas should be array'
      }
      
      let sum = 0
      
      for (let i = 0; i < areas.length; i++) {
        if (Object.getPrototypeOf(areas[i]).type === 'Shape') {
          sum += areas[i].area()
        } else {
          throw 'this object is not type of shape'
        }
      }
      
      return sum
    }
  }
}

console.log(areaCalculator([
  square(4),
  square(6),
  square(4),
]).sum())

// LISKOV SUBSTITUTION PRINCIPLE
// In other words, as simple as that,
// a subclass should override the parent class
// methods in a way that does not break functionality
// from a client’s point of view.

// INTERFACE SEGREGATION PRINCIPLE
// A client should never be forced to implement an
// interface that it doesn’t use or clients shouldn’t
// be forced to depend on methods they do not use.

// DEPENDENCY INVERSION PRINCIPLE
// https://stackoverflow.com/questions/5349003/dependency-inversion-principle-in-javascript
