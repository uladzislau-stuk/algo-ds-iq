// https://www.youtube.com/watch?v=ZBdE8DElQQU

class Node {
  constructor(val, next = null) {
    this.val = val
    this.next = next
  }
}


// TODO:
// 1) Remove/add last
const n1 = new Node(100)

class Example {
  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }
  
  // Inset first node
  insetFirst(val) {
    this.head = new Node(val, this.head)
    this.size++
  }
  
  // Insert last node
  insertLast(val) {
    let node = new Node(val)
    let current
    
    // if empty, make head
    if (!this.head) {
      this.head = node
    } else {
      current = this.head
      
      while (current.next) {
        current = current.next
      }
      
      current.next = node;
    }
    
    this.size++;
  }
  
  // Insert at index
  insertAt(val, index) {
    // if index out of range
    if (index < 0 || index >= this.size) {
      return null
    }
    
    if(index === 0) {
      this.head = new Node(val, this.head)
    }
    
    let current, previous;
    
    // Set current to first
    current = this.head
    let count = 0
    
    while(count < index) {
      previous = current
      count++
      current = current.next
    }
    
    const node = new Node(val, current)
    previous.next = node
    this.size++
  }
  
  // Get at index
  getAt(index) {
    let current = this.head
    let count = 0
    
    if (index < 0 || index >= this.size) {
      return null
    }
    
    while (current) {
      if (count === index) {
        console.log(current.val)
        return current.val
      }
      count++
      current = current.next
    }
  }
  
  // Remove at index
  removeAt(index) {
    if (index < 0 || index >= this.size) {
      return null
    }
    
    let current = this.head
    let previous
    let count = 0
    
    if (index === 0) {
      console.log(this.head.val)
      this.head = this.head.next
      return
    }
    
    while (count < index) {
      previous = current
      current = current.next
      count++
    }
    
    console.log(current.val)
    previous.next = current.next
    this.size--
  }
  
  // Clear the list
  clearList() {
    this.head = null
    this.size = 0
  }
  
  // Print the list data
  printListData() {
    let current = this.head
    
    if (!current) {
      console.log('empty list')
    }
    
    while (current) {
      console.log(current.val)
      current = current.next
    }
  }
}

const ll = new Example()

ll.insetFirst(100)
ll.insetFirst(200)
ll.insetFirst(300)
// ll.insertAt(400, 2)
ll.removeAt(1)
ll.clearList()

ll.printListData()
