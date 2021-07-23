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

findMinNumberStationsToShowMyProgram();

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
  
  //
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

