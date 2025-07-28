const myNumbers = [1, 4, 5, 6, 7, 8, 9, 0];
const initialvalue = 0;
const newNumber = myNumbers.reduce((acc, currVal) => {
  console.log(`acc: ${acc} and currVal: ${currVal}`);
  return acc + currVal;
}, 0);
//const reNumber = [];
//console.log(newNumber);
const reNumber = myNumbers.forEach((acc, currVal) => {
  console.log(`acc: ${acc} and currVal: ${currVal}`);
  return acc + currVal;
}, 0);
console.log(reNumber);
