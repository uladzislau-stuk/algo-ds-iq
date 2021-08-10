class HashTableExample {
  
  table = new Array(5)
  numItems = 0
  loadFactor = this.numItems / this.table.length
  
  hashStringToIndex = (key, tableSize) => {
    let hash = 17;
    console.log(tableSize)
  
    for (let i = 0; i < key.length; i++) {
      // 13 - arbitrary prime
      console.log(hash)
      hash = (12 * hash * key.charCodeAt(i)) % tableSize
    }
    
    return hash
  }
  
  resize = () => {
    const newTable = new Array(this.table.length * 2)
    let numItems = 0
    
    this.table.forEach(item => {
      if (item) {
        item.forEach(([key, value]) => {
          const idx = this.hashStringToIndex(key, this.newTable.length)
          numItems++
          if (newTable[idx]) {
            newTable[idx].push([[key, value]])
          } else {
            newTable[idx] = [[key, value]]
          }
        })
      }
    })
    
    this.table = newTable
    this.numItems = numItems
  }
  
  setItem = (key, value) => {
    const idx = this.hashStringToIndex(key, this.table.length)
    this.numItems++
    
    if (this.loadFactor > 0.8) {
      this.resize()
    }
    if (this.table[idx]) {
      this.table[idx].push([[key, value]])
    } else {
      this.table[idx] = [[key, value]]
    }
  }
  
  getItem = (key) => {
    const idx = this.hashStringToIndex(key, this.table.length)
    return this.table[idx].find(x => x[0] === key)[1]
  }
}

const hashTable = new HashTableExample()
hashTable.setItem('firstName', 'bob')
hashTable.setItem('lastName', 'tim')
hashTable.setItem('firstName', 'vlad')
hashTable.setItem('otherValue', 'vlad')

console.log(hashTable.table)
