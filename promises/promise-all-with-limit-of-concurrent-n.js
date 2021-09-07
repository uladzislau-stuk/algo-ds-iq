const pAll = async (queue, concurrency) => {
  let index = 0;
  const results = [];
  
  // Run a pseudo-thread
  const execThread = async () => {
    while (index < queue.length) {
      const curIndex = index++;
      // Use of `curIndex` is important because `index` may change after await is resolved
      results[curIndex] = await queue[curIndex]();
    }
  };
  
  // Start threads
  const threads = [];
  for (let thread = 0; thread < concurrency; thread++) {
    threads.push(execThread());
  }
  await Promise.all(threads);
  return results;
};

const getRandomInt = (max) => Math.floor(Math.random() * max);

const wait = sec => new Promise((resolve) => setTimeout(resolve, sec * 1000));

const makeHTTPRequest = async (url) => {
  console.log(`sending request to ${url}`);
  const timeToWait = getRandomInt(20);
  await wait(getRandomInt(timeToWait));
  console.log(`Request to ${url} is completed`);
  return timeToWait;
}

const test = async () => {
  const urls = ["url1", "url2", "url3", "url4", "url5", "url6"];
  const promises = urls.map(url => () => makeHTTPRequest(url));
  const res = await pAll(promises, 2);
  console.log(res);
  return res;
};

test()
