const myNumbers = [1, 4, 5, 6, 7, 8, 9, 0];

// const newNums = myNumbers.map((num) => num + 10);
// console.log(newNums);

// const oldNum = [];
// myNumbers.forEach((num) => {
//   return oldNum.push(num + 10);
// });
// console.log(oldNum);

//chainning method

const newNums = myNumbers
  .map((num) => num * 3)
  .map((num) => num + 3)
  .filter((num) => num > 10);

console.log(newNums);
