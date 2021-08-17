// https://github.com/rithmschool/javascript_computer_science_exercises/tree/master/hash_tables_exercise
function Node(val, next = undefined) {
  this.val = val;
  this.next = next;
}

function LinkedList() {
  this.size = 0;
  this.head = null;
  this.tail = null;
  
  this.insertTail = (val) => {
    const node = new Node(val);
    
    if (this.tail) {
      this.tail.next = node;
      this.tail = node;
    } else {
      this.head = this.tail = node;
    }
    
    this.size++;
  };
  
  this.findNode = (fn) => {
    if (!this.size) return;
    let current = this.head;
    let match;
    
    while (current) {
      match = fn(current.val);
      if (match) return current;
      current = current.next;
    }
  };
}

function HashTable(size = 10) {
  this.keyMap = new Array(size);
  this.tableSize = size;
  this.linearProbingFn = undefined;
}

HashTable.prototype.RANDOM_VALUE = 18422;

// main hash function
HashTable.prototype._hash = function (key) {
  var hashFunction = function (numericKey, randomValue, size) {
    return (numericKey * randomValue) % size;
  };
  
  // Check number is neither positive Infinity, negative Infinity, nor NaN.
  // 0 / 0 -> NaN
  // 1 / 0 -> Infinity
  // 0 -> 0
  if (Number.isFinite(key)) {
    return hashFunction(key);
  }
  
  if (typeof key === 'string' && !isNaN(Number(key))) {
    return hashFunction(Number(key), this.RANDOM_VALUE, this.keyMap.length);
  }
  
  var tempKey = key;
  if (key === null) {
    tempKey = 'null';
  }
  
  if (key === undefined) {
    tempKey = 'undefined';
  }
  
  if (typeof tempKey === 'string') {
    var numKey = 0;
    for (var i = 0; i < tempKey.length && i < this.tableSize; i++) {
      numKey += tempKey.charCodeAt(i);
    }
    
    return hashFunction(numKey, this.RANDOM_VALUE, this.keyMap.length);
  }
};

// calculation GCD, (5,2) -> (5-2,2) -> (3, 2) -> (3-2,2) -> (1, 2-1) -> (1,1)
// GCD = 1
HashTable.prototype._greatestCommonDenominator = function (a, b) {
  if (a === b) {
    return a
  }
  while (a !== b) {
    if (a > b) {
      a = a - b
    } else {
      b = b - a
    }
  }
  return a
}

// resolution collisions using open addressing technique
HashTable.prototype._setLinearProbingFn = function() {
  let a = 2
  // calculate gcd
  let gcd = this._greatestCommonDenominator(a, this.tableSize)
  
  // linearProbingFn can probe al if gcd === 1
  while (gcd !== 1) {
    a = a + 1
    gcd = this._greatestCommonDenominator(a, this.tableSize)
  }
  
  // linearProbingFn = (x) => ax + b, where a,b constants
  this.linearProbingFn = (x) => a * x + 4
}

HashTable.prototype.setLinearProbing = function (key, value) {
  let x = 1
  let hashIndex = this._hash(key)
  let index = hashIndex
  
  if (!this.linearProbingFn) {
    this._setLinearProbingFn()
  }
  
  // TODO: resize table should be added
  
  // if index is already taken
  while (this.keyMap[index]) {
    // calculate next index
    index = (hashIndex + this.linearProbingFn(x)) % this.tableSize
    x = x + 1
  }
  
  // set value
  this.keyMap[index] = [key, value]
}

HashTable.prototype.getLinearProbing = function (key) {
  let x = 1
  let hashIndex = this._hash(key)
  let index = hashIndex
  
  // create linear probing function
  if (!this.linearProbingFn) {
    this._setLinearProbingFn()
  }
  
  while (this.keyMap[index][0] !== key) {
    index = (hashIndex + this.linearProbingFn(x)) % this.tableSize
    x = x + 1
  }
  console.log(this.keyMap[index][1])
  return this.keyMap[index][1]
}

// resolution collisions using separate chaining technique
HashTable.prototype.setSeparateChaining = function (key, value) {
  const idx = this._hash(key);
  
  if (this.keyMap[idx]) {
    // add new item
    this.keyMap[idx].insertTail([key, value]);
  } else {
    // create linked list as main DS for storing collisions
    const ll = new LinkedList();
    
    // insert tail
    ll.insertTail([key, value]);
    
    // assign ll to index
    this.keyMap[idx] = ll;
  }
};

HashTable.prototype.getSeparateChaining = function (key) {
  const idx = this._hash(key);
  
  if (this.keyMap[idx]) {
    // find node in ll
    const node = this.keyMap[idx].findNode((val) => val[0] === key)
    // return node value or undefined
    if (node) return node.val[1]
  }
};

HashTable.prototype.containsKey = function (key) {
  const idx = this._hash(key);
  return this.keyMap[idx][0] === key;
};

HashTable.prototype.remove = function (key) {
  const idx = this._hash(key);
  const val = this.keyMap[idx];
  
  if (val) {
    delete this.keyMap[idx];
    return val[0];
  }
};

HashTable.prototype.keys = function () {
  return this.keyMap.filter(kV => typeof kV !== 'undefined')
    .map(([key]) => key);
};

HashTable.prototype.values = function () {
  return this.keyMap.filter(kV => typeof kV !== 'undefined')
    .map(([_, val]) => val);
};

const hastTable = new HashTable();


hastTable.setLinearProbing('firstName', 'Vlad');
hastTable.setLinearProbing('lastName', 'Stuk');
hastTable.setLinearProbing('position', 'Software Engineer');
hastTable.setLinearProbing('company', 'Google');
hastTable.setLinearProbing('experience', '15 years');

hastTable.getLinearProbing('firstName');
hastTable.getLinearProbing('lastName');
hastTable.getLinearProbing('position');
hastTable.getLinearProbing('company');
hastTable.getLinearProbing('experience');

// console.log(hastTable.getSeparateChaining('hello'))
// hastTable.set('lastName', 'Stuk')
// console.log(hastTable.get('firstName'))
// console.log(hastTable.get('firstName'))
// console.log(hastTable.containsKey('firstName'))
// console.log(hastTable.remove('hello'))
// console.log(hastTable.keys())
// console.log(hastTable.values())

console.log(hastTable.keyMap);
