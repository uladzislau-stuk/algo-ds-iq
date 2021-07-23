/**
 * TASKS:
 * - Graph implementation from 'Грокаем Алгоритмы стр 138'
 * + Letter combinations of a phone number
 * - Generate Parentheses
 * - Permutations
 * - Combination sum
 * - Subsets
 * + Number of Islands
 * - Number of Enclaves
 * - Surrounded Regions
 * - Word Search
 * - Smallet Rectangle
 * - Enclosing Back Pixels
 * */


// Dijkstra's algorithm
// 1. Create graph
// 2. Assign costs to costs to vertices (node cost determines how much time is required to move to this node from the initial node)
// 3. Note down parents
const graph = {
  start: {
    a: 6,
    b: 2,
  },
  a: {
    fin: 1,
  },
  b: {
    a: 3,
    fin: 5,
  },
  fin: {},
};

const costs = {
  a: 6,
  b: 2,
  fin: Infinity
}

const parents = {
  a: 'start',
  b: 'start',
  fin: undefined
}

function findLowestCostNode(costs, processed) {
  let lowestCost = costs.fin
  let lowestCostNode
  
  for (const node in costs) {
    if (costs.hasOwnProperty(node)) {
      const cost = costs[node]
      
      if (cost < lowestCost && !processed.includes(node)) {
        lowestCost = cost
        lowestCostNode = node
      }
    }
  }
  
  return lowestCostNode
}

function findShortestDistance(graph, costs, parents) {
  // find node with the lowest cost from not processed ones
  const processed = []
  
  let node = findLowestCostNode(costs, processed)
  
  // we need to iterate through all nodes
  while (node) {
    // get neighbors of node
    const neighbors = graph[node]
  
    // iterate through all neighbors of this node
    for (const neighbor of Object.keys(neighbors)) {
      const newCost = costs[node] + neighbors[neighbor]
      
      // check if it is possible to reach a given node faster through the current node
      if (newCost < costs[neighbor]) {
        costs[neighbor] = newCost
        // this node becomes new parent for neighbor
        parents[neighbor] = node
      }
    }
    // mark node as processed
    processed.push(node)
    
    // find next node to process
    node = findTheLowestCostNode(costs, processed)
  }
  
  return costs.fin
}
// console.log(findShortestDistance(graph, costs, parents))

function findShortestDistancePath(graph, costs, parents) {
  // find node with the lowest cost from not processed ones
  const processed = []
  const path = []
  
  let node = findLowestCostNode(costs, processed)
  
  // we need to iterate through all nodes
  while (node) {
    // get neighbors of node
    const neighbors = graph[node]
    
    // iterate through all neighbors of this node
    for (const neighbor of Object.keys(neighbors)) {
      const newCost = costs[node] + neighbors[neighbor]
      
      // check if it is possible to reach a given node faster through the current node
      if (newCost < costs[neighbor]) {
        costs[neighbor] = newCost
        // this node becomes new parent for neighbor
        parents[neighbor] = node
      }
    }
    // mark node as processed
    processed.push(node)
    
    // find next node to process
    node = findTheLowestCostNode(costs, processed)
  }
  
  return costs.fin
}

console.log(findShortestDistancePath(graph, costs, parents))

/**
 * BFS - Breadth-first search
 *
 * Theory: https://www.youtube.com/watch?v=pcKY4hjDrxk
 * BFS and DFS - graphs traversal methods
 * */

/*
 * DFS - Depth-first search
 *
 * Theory: https://www.youtube.com/watch?v=jFZsDDB0-vo
 * Articulation Point (Disconnected components)
 * Articulation Point - if there is any vertex that disconnect graph
 * in certain point
 *
 * */

/*
 * Number of Islands
 * https://www.youtube.com/watch?v=__98uL6wst8&t=607s
 * */

// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// [i][j] = 00 01 02 03 04
//
//
//
// Output: 1

// Constraints:
//
//   m == grid.length
// n == grid[i].length
// 1 <= m, n <= 300
// grid[i][j] is '0' or '1'.

const grid = [
  ['1', '1', '1', '1', '0'],
  ['1', '1', '0', '1', '0'],
  ['1', '1', '0', '0', '1'],
  ['0', '0', '1', '1', '0'],
  ['0', '1', '0', '1', '0'],
];

function markCurrentIsland(grid, row, col, rows, cols) {
  // Boundary case for matrix
  if (row < 0 || row >= rows || col < 0 || col >= cols || grid[row][col] !== '1') {
    return;
  }
  
  // Mark current cell as visited
  grid[row][col] = '2';
  
  // Make recursive call in all 4 adjacent directions
  markCurrentIsland(grid, row - 1, col, rows, cols); // TOP
  markCurrentIsland(grid, row, col + 1, rows, cols); // RIGHT
  markCurrentIsland(grid, row + 1, col, rows, cols); // BOTTOM
  markCurrentIsland(grid, row, col - 1, rows, cols); // LEFT
}

function numIslands(grid) {
  const rows = grid.length;
  
  if (rows < 1) {
    return 0;
  }
  
  const cols = grid[0].length;
  let numberOfIslands = 0;
  
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === '1') {
        markCurrentIsland(grid, row, col, rows, cols);
        numberOfIslands += 1;
      }
    }
  }
  
  return numberOfIslands;
}

// console.log(numIslands(grid)) // 1


/*
 * DFS - LETTER COMBINATIONS OF A PHONE NUMBER
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number/
 * [2,3]
 *
 * WRITE ALL POSSIBLE COMBINATIONS OF LETTERS
 *
 * CONSTRAINTS
 * 0 <= DIGITS.LENGTH <= 4
 * DIGITS[I] IS A DIGIT IN THE RANGE ['2', '9'].
 * */

/**
 * Solution: Loop through the graph recursively
 *
 * '' -> []
 * '2' -> ['a', 'b', 'c']
 * '235'
 *
 *            Head
 *        a         b       c     // 0
 *      d e f     d e f   d e f   // 1
 *   jkl jkl jkl                  // 2
 * */
const mapOfNumbers = {
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
};


/*
 * Implementation #1
 * */
// const createCombinations = (digits, letterToMerge, level = 0) => {
//   const letters = mapOfNumbers[digits[level]];
//
//   return letters.reduce((acc, letter) => {
//     if (digits.length - 1 === level) {
//       return [...acc, letterToMerge + letter];
//     } else {
//       return [...acc, ...createCombinations(digits, letterToMerge + letter,
// level + 1)]; } }, []); };  const getLetterCombinations = function (digits) {
// if (!digits.length) { return []; }  if (digits.length === 1) { return
// mapOfNumbers[digits]; }  let combinations = [];  for (let letter of
// mapOfNumbers[digits[0]]) { combinations =
// combinations.concat(createCombinations(digits.slice(1), letter)); }  return
// combinations; };

/*
 * Implementation #2
 *                 Head
 *        a         b       c     // '239'
 *      d e f     d e f   d e f   // 2'39'
 *   jkl jkl jkl                  // 23'9'
 *
 *   ['']
 *
 *   ['a', 'b', 'c'], '239'
 *
 *   ['ad', 'ae', 'af', ...] '39'
 *
 *   ['adj', 'adk', 'adl', ...] '9'
 * */
function letterCombinations(digits) {
  if (!digits.length) {
    return [];
  }
  
  if (digits.length > 4) {
    throw new Error('The digits length shouldn\'t exceed 4 numbers');
  }
  
  const allowedDigits = Object.keys(mapOfNumbers);
  const isValidInput = digits.split('')
    .every(digit => allowedDigits.includes(digit));
  
  if (!isValidInput) {
    throw new Error('All digits should be in the range from 2 to 9');
  }
  
  function findCombinations(possibilities, digits) {
    const combinations = [];
    
    for (const possibility of possibilities) {
      
      for (const letter of mapOfNumbers[digits[0]]) {
        combinations.push(possibility.concat(letter));
      }
    }
    
    return digits.length > 1
      ? findCombinations(combinations, digits.slice(1))
      : combinations;
  }
  
  return findCombinations([''], digits);
}

// console.log(letterCombinations('29'));

