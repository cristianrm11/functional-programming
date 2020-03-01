const R = require("rambda");
const { compose, add } = R;

const twentyThree = add(10, 13);
const addTen = add(10);
const twoThree = addTen(13);

console.log(twoThree);
