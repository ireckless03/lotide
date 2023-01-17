const assertEqual = require('../assertEqual');
const tail = require('../tail');

const words = ["Yo Yo", "Lighthouse", "Labs"];
const results = tail(words); 
assertEqual(results.length, 2); // original array should still have 3 elements!
assertEqual(results[0],"Lighthouse");
assertEqual(results[1],"Labs");