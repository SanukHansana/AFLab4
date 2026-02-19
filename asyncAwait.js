const myPromise = require('./promises'); // Import the promise from promises.js
async function myFunction() { 
  try { 
    const result = await myPromise; 
    console.log(result); 
  } catch (error) { 
    console.log(error); 
  } 
} 
 
myFunction();


//need to add this to git