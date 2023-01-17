const assertEqual = require('../assertEqual');
const words = ["Yo Yo", "Lighthouse", "Labs"];
const results = tail(words); // no need to capture the return value since we are not checking it
assertEqual(results.length, 2); // original array should still have 3 elements!
assertEqual(results[0],"Lighthouse");
assertEqual(results[1],"Labs");