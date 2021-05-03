const fetchData = callback => {
  setTimeout(() => {
    callback('Done!')
  }, 1500);
};

// Async code
setTimeout(() => {
  console.log('Timer is done!');
  fetchData(text => {
    console.log(text);
  });
}, 2000);

// These codes are syncronized, cause these codes run right ahead.
console.log('Hello!');
console.log('Hi!');
