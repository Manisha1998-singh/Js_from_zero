// //let a = 300;
// // if (true) {
// //   let a = 10;
// //   console.log(a);
// // }
// //console.log(a);
// //console.log(b);
// //console.log(a);

// // function one() {
// //   const username = "Manisha";

// //   function two() {
// //     const website = "youtube";
// //     console.log(username);
// //   }
// //   //console.log(website);

// //   //two();
// // }
// // one();
// // if (true) {
// //   const username = "Manisha";
// //   if (username === "Manisha") {
// //     const website = "youtube";
// //     console.log(username + website);
// //     console.log(website);
// //   }
// //   //console.log(website);
// // }
// //console.log(username);

// ///++++++++++++++++++++++++++++++ interesting ++++++++++++++++
// // console.log(addone(5));
// // function addone(num) {
// //   return num + 1;
// // }
// // //addTwo(4);
// // const addTwo = function (num) {
// //   return num + 2;
// // };
// // addTwo(4);

// ///++++++++++++++++++++++++++++++ arrow function ++++++++++++++++
// const userName1 = {
//   userName: "manisha",
//   price: 999,
//   welcomeMsg: function () {
//     console.log(`${this.userName}, welcome manisha`);
//     console.log(this);
//   },
// };
// userName1.welcomeMsg();
// userName1.userName = "Anjali";
// userName1.welcomeMsg();
// console.log(this);

// function chai() {
//   let usernamep = "manishaa";
//   console.log(this.usernamep);
// }
// chai();

// const chai = () => {
//   let username = "manisha";
//   console.log(this);
// };
// chai();

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };
//const addTwo = (num1, num2) => num1 + num2;

//console.log(addTwo(4, 5));
//const addTwo = (num1, num2) => num1 + num2;
// const addTwo = (num1, num2) => ({ username: "manisha" });
// console.log(addTwo(4, 5));
// const myArray = [2, 4, 4, 5];
// myArray.forEach(() => {});

//IIFE (immediatedy invoked function expression)

// (function mybaby() {
//   // name IIFE
//   console.log(`DB coonedted `);
// })();
// //mybaby();
// ((classP) => {
//   // simple IIFE
//   console.log(`db connected two ${classP}`);
// })("first");->

///control flow logic flow n
const balance = 1000;
if (balance > 300) console.log("manisha"), console.log("manisha1");

if (balance < 500) {
  console.log("less than");
} else if (balance < 750) {
  console.log("less than 750");
} else if (balance < 950) {
  console.log("less than 750");
} else {
  console.log("less than 1200");
}

const userLogin = true;
const debitCard = true;
const loginFromGoogle = false;
const loginFromEmail = true;

if (userLogin && debitCard && 2 == 3) {
  console.log("allow to buy course");
}
if (loginFromGoogle || loginFromEmail) {
  console.log("allow to login");
}
