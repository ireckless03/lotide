// TEST CODE
const head = require('../head');
const assertEqual = require('../assertEqual');

assertEqual(head([1,6,7]), 1);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Long", "Days", "Ahead"]), "Long");

