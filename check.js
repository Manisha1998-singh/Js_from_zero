// console.log("document");
// const accountId = 22;
// let accountNumber = 354545;
// var nameVale = "manisha";
// console.table([accountId, accountNumber, nameVale]);
// //accountId = 22;
// //console.log(accountId);
// accountNumber = 66666;
// console.log(accountNumber);
// const arr = [2, 3, 4, 5];
// console.log(arr);
// console.log(arr[0]);
// const newarr = arr;
// newarr.unshift(8);
// console.log(newarr);
// newarr.shift();
// console.log(newarr);
// const myarr = new Array(1, 3, 4, 5);
// console.log(myarr);
// myarr.push(8);
// console.log(myarr);
// myarr.pop();
// console.log(myarr);
// console.log(myarr.includes(7));
// console.log(myarr);
// console.log(myarr.indexOf(5));
// const newarray = myarr.join();
// console.log(myarr);
// console.log(newarray);
// console.log(typeof newarray);

// //slice, splice interview topics
// const arr = [4, 9, 6, 6, 7, 8, 9];
// console.log("a", arr);

// const mynewarr = arr.slice(1, 3);
// console.log(mynewarr);
// console.log("b", arr);

// const mynewarr2 = arr.splice(1, 3);
// console.log(mynewarr2);

//objects
// const mySym = Symbol("Key2");
// const nameObj = {
//   name: "manisha",
//   "full name": "manisha singh",
//   arrNumber: [2, 4, 5],
//   [mySym]: "mykey33",
// };
// console.log(nameObj.name);
// console.log(nameObj["full name"]);
// console.log(nameObj.arrNumber);
// console.log(nameObj.mySym);
// console.log(typeof nameObj.mySym);
// console.log(nameObj[mySym]);
// console.log(typeof nameObj[mySym]);
//nameObj.name = "Nishaa";
//Object.freeze(nameObj);
// console.log(nameObj.name);
// nameObj.name = "Preeti";
// console.log(nameObj.name);
// nameObj.greeting = function () {
//   console.log("hii manisha Singh");
// };
// console.log(nameObj.greeting);
// console.log(nameObj.greeting());
// nameObj.greeting2 = function () {
//   console.log(`hii this side, ${this["full name"]}`);
// };
// console.log(nameObj.greeting2());
function calculationPrice(val1, val2, ...num1) {
  return num1;
}
console.log(calculationPrice(200, 4000, 300000));
console.log("hii");
const user = {
  name: "Nisha",
  price: 45,
};

function handleObject(anyobject) {
  console.log(`username is ${anyobject.name}`);
}
handleObject({
  name: "mani",
  price: 40,
});

const myNewAarry = [200, 55, 6, 66];

function returnMyArray(getArray) {
  return getArray[0];
}
console.log(returnMyArray([344, 555]));
