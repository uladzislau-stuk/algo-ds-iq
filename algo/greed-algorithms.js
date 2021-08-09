/*
* 23.07.2021
* FIND THE MINIMUM COLORS THE MAP CAN BE PAINTED
* TWO NEIGHBORING STATES CANNOT BE PAINTED THE SAME COLOR
* */
const map = [
  [0,0,0,0,0,0],
  [0,0,0,0,0],
  [0,0,0,0],
]

function paintCell(map, rowIdx, colIdx, minNumberColors) {
  if (rowIdx === 0 && colIdx === 0) {
    map[rowIdx][colIdx] = 1
    return minNumberColors
  }
  
  const possiblePaths = [
    // y            x
    [rowIdx - 1, colIdx],     // top
    [rowIdx - 1, colIdx + 1], // topRight
    [rowIdx, colIdx + 1],     // right
    [rowIdx + 1, colIdx + 1], // rightBottom
    [rowIdx + 1, colIdx],     // bottom
    [rowIdx + 1, colIdx - 1], // bottomLeft
    [rowIdx, colIdx - 1],     // left
    [rowIdx - 1, colIdx - 1 ] // leftTop
  ]
  
  let currentColor = minNumberColors
  
  while (currentColor > 0 && currentColor <= minNumberColors) {
    // check all possible paths
    const canWePaintCell = possiblePaths.every(([checkedRowIdx, checkedColIdx]) => (
      checkedRowIdx < 0 ||
      checkedRowIdx >= map.length ||
      checkedColIdx < 0 ||
      checkedColIdx >= map[rowIdx].length ||
      currentColor !== map[checkedRowIdx][checkedColIdx]
    ))
    
    if (canWePaintCell) {
      // paint cell
      map[rowIdx][colIdx] = currentColor
      return minNumberColors
    }
    
    currentColor--
  }
  
  // we wasn't able to find colIdxor, create new one
  minNumberColors += 1
  map[rowIdx][colIdx] = minNumberColors
  
  return minNumberColors
}

function findMinimumColorMapCanBePainted(map) {
  if (!map.length) {
    return 0
  }
  
  let minNumberColors = 1
  
  for(let rowIdx = 0; rowIdx < map.length; rowIdx++) {
    for (let colIdx = 0; colIdx < map[rowIdx].length; colIdx++) {
      minNumberColors = paintCell(map, rowIdx, colIdx, minNumberColors)
    }
  }
  
  console.log(map)
  
  return minNumberColors
}

console.log(findMinimumColorMapCanBePainted(map))


// 23.07.2021
// FIND SUM OF NUMBER - O(n2)
// 0 // 0
// 0 + 1 // 0
// 0 + 1 + 2 // 1
// 0 + 1 + 2 + 3 // 2

// Variables
// 1 <= maxNumbersToSum <= numbers.length

// 1. Find the minimum number
// 2. Get previous sum and add min number
// 3. Push index to already processed array

function findSumOfNumbers() {
  const numbers = [1,2,2,3,5,0,4,7]
  // sums of min numbers
  const sums = []
  const processedIndexes = []
  
  for(let i = 0; i < numbers.length; i++) {
    let minNumber = Infinity
    let minNumberIndex
    
    for (let j = 0; j < numbers.length; j++ ) {
      // find minimum number and skip already processed ones
      if (!processedIndexes.includes(j) && numbers[j] < minNumber) {
        minNumber = numbers[j]
        minNumberIndex = j
      }
    }
    
    // if we already have numbers then add minimum one to previous sum
    if (sums.length) {
      sums.push(sums[sums.length - 1] + minNumber)
    } else {
      sums.push(minNumber)
    }
    
    processedIndexes.push(minNumberIndex)
  }
  
  return sums
}

// console.log(findSumOfNumbers())

/*
 * 22.07.21
 * You open your own radio program and want to be
 * heard in all 50 states. You need to decide on
 * which radio stations your program should be broadcast.
 * Each station costs money, so the number of stations should
 * be kept to a minimum.
 * */
function findMinNumberStationsToShowMyProgram() {
  let statesNeeded = ['mt', 'wa', 'or', 'id', 'nv', 'ut', 'ca', 'az'];
  const stations = {
    kone: ['id', 'nv', 'ut'],
    ktwo: ['wa', 'id', 'mt'],
    kthree: ['or', 'nv', 'ca'],
    kfour: ['nv', 'ut'],
    kfive: ['ca', 'az'],
  };
  
  const finalStations = [];
  
  while (statesNeeded.length) {
    let bestStation;
    let statesCovered = [];
    
    for (let [station, statesForStation] of Object.entries(stations)) {
      // skip already checked stations
      if (finalStations.includes(station)) {
        continue;
      }
      
      // find interception between needed states and current states for station
      let interception = statesForStation.filter(station => statesNeeded.includes(station));
      
      if (interception.length > statesCovered.length) {
        bestStation = station;
        statesCovered = interception;
      }
    }
    
    // exclude already added stations
    statesNeeded = statesNeeded.filter(state => !statesCovered.includes(state));
    
    // save station
    finalStations.push(bestStation);
  }
  
  console.log(finalStations);
  
  return finalStations;
}

// findMinNumberStationsToShowMyProgram();

/*
 * 22.07.2021
 * FIND THE MAXIMUM STATIONS CUSTOMER CAN CONNECT
 * BASED ON BUDGET
 * */
const radioStations = {
  fm: {
    a: 100,
    b: 120,
    c: 75,
  },
  dlm: {
    a: 110,
    c: 100,
    d: 140,
  },
  moscow: {
    e: 100,
    d: 150,
    c: 140,
  },
  minsk: {
    a: 90,
    e: 150,
    f: 200,
    c: 75,
  },
};

const budget = 500;

/*
 * Expected output:
 *
 * stations: {
 *   a: {
 *     fm: 75
 *   },
 *   e: {
 *     moscow: 100,
 *     minsk: 100
 *   }
 * },
 * total: 175
 * */

function findBestOfferForBoss(radioStations, budget) {
  const offer = {
    allAreas: {},
    areas: {},
    total: 0,
    budget,
  };
  
  for (let radioStation in radioStations) {
    if (!radioStations.hasOwnProperty(radioStation)) {
      return;
    }
    
    for (let area in radioStations[radioStation]) {
      if (!radioStations[radioStation].hasOwnProperty(area)) {
        return;
      }
      
      if (!offer.allAreas[area]) {
        offer.allAreas[area] = {
          [radioStation]: radioStations[radioStation][area],
        };
        continue;
      }
      
      const stationOfferPrice = Object.values(offer.allAreas[area])[0];
      
      if (radioStations[radioStation][area] === stationOfferPrice) {
        offer.allAreas[area] = {
          ...offer.allAreas[area],
          [radioStation]: radioStations[radioStation][area],
        };
        continue;
      }
      
      if (radioStations[radioStation][area] < stationOfferPrice) {
        offer.allAreas[area] = {
          [radioStation]: radioStations[radioStation][area],
        };
      }
    }
  }
  
  const sortedOfferAreas = Object.entries(offer.allAreas)
    .sort(([area1, offers1], [area2, offers2]) => {
      return Object.values(offers1)[0] - Object.values(offers2)[0];
    });
  
  offer.allAreas = Object.fromEntries(sortedOfferAreas);
  
  for (let idx = 0; idx < sortedOfferAreas.length; idx++) {
    const [area, offers] = sortedOfferAreas[idx];
    const price = Object.values(offers)[0];
    
    if (offer.total + price <= budget) {
      offer.areas[area] = offers;
      offer.total += price;
    } else {
      break;
    }
  }
  
  return offer;
}

// console.log(findBestOfferForBoss(radioStations, budget))

