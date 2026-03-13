// const myaarray = [
//   "manisha",
//   "shilapa",
//   "laxami",
//   "manisha1",
//   "shilapa1",
//   "laxami1",
// ];

// // myaarray.forEach(function (item) {
// //   console.log(item);
// // });
// myaarray.forEach((item) => {
//   console.log(item);
// });

// function myNum(item) {
//   console.log(item);
// }
// myaarray.forEach(myNum);

// myaarray.forEach((item, index, arr) => {
//   console.log(item, index, arr);
// });

// const myNums = [1, 3, 3, 5, 6, 7];
// const newNums = [];
// myNums.forEach((num) => {
//   if (num > 4) {
//     newNums.push(num);
//   }
// });
// console.log(newNums);

//const array1 = [1, 3, 5];
// const myTotal = array1.reduce(function (acc, currval) {
//   console.log(`acc: ${acc} and currval: ${currval}`);
//   return acc + currval;
// }, 0);

// const myTotal= array1.reduce((acc, currVal) => acc + currVal, 0 )
// console.log(myTotal);

// const coding = ["c++", "js", "c", "java", "python"];
// const value = coding.forEach((item) => {
//   //console.log(item);
//   return item;
// });
// console.log(value);

//filtering usingh filter method
// const coding = [1, 3, 4, 5, 6, 7, 8, 8, 9, 0];

// const newNum = coding.filter((num) => {
//   return num > 4;
// });
// console.log(newNum);

//filtering usingh foreach
// const newNums = [];
// coding.forEach((num) => {
//   if (num > 4) {
//     console.log(num);
//     newNums.push(num);
//   }
// });
// console.log(newNums);

//filtering usingh foreach objects

const books = [
  { title: "Book One", genre: "Fiction", publish: 1991, edition: 2005 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1994, edition: 2004 },
  { title: "Book Three", genre: "History", publish: 1995, edition: 2006 },
  { title: "Book Four", genre: "Fiction", publish: 1991, edition: 2009 },
  { title: "Book Five", genre: "Fiction", publish: 1996, edition: 2004 },
  { title: "Book Six", genre: "Fiction", publish: 1990, edition: 2003 },

  { title: "Book Seven", genre: "Science", publish: 1994, edition: 2008 },
  { title: "Book Eight", genre: "Non-Fiction", publish: 1991, edition: 2006 },
  { title: "Book Nine", genre: "Fiction", publish: 1995, edition: 2008 },
  { title: "Book Ten", genre: "Science", publish: 2005, edition: 2001 },
];
const newNums = [];
// const userBooks = books.filter((bk) => {
//   return bk.genre === "History";
// });
const userBooks = books.filter((bk) => {
  return bk.publish >= 1990 && bk.genre === "History";
});
// books.forEach((bk) => {
//   if (bk.genre === "History") {
//     newNums.push(bk);
//   }
//   //return bk.genre === "History";
// });

console.log(userBooks);
