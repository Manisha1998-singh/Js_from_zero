console.log(3 + "3");
console.log(typeof (3 + "3"));
// 33
// string

console.log(+"3");
console.log(typeof +"3");
// 3
// number
console.log(+"3.14");
console.log(typeof +"3.14");
// 3.14
// number
console.log(+true);
console.log(typeof +true);
// 1
// number
console.log(+null);
console.log(typeof +null);
// 0
// number
console.log(+"");
console.log(typeof +"");
// 0
// number
console.log(+undefined);
console.log(typeof +undefined);
// NaN
// number
console.log(+"abc");
console.log(typeof +"abc");
// NaN
// number

console.log(+[]);
console.log(typeof +[]);
// 0
// number

console.log(+[3]);
console.log(typeof +[3]);
// 3
// number
console.log(null + 1);
console.log(typeof null + 1);
// 1
// object1
console.log(undefined + 1);
console.log(typeof undefined + 1);
// NaN
// undefined1

const arr = [1, 2, 3];
arr.length = 0;
console.log(arr);

// []
console.log(Object.keys({ a: 1, b: 2, c: 3 }).length);
// 3

console.log("hello".split("").reverse().join(""));
// olleh

let arrr = [2, 4, 6, 7, 8, 9];
console.log(arrr.flat());
// [ 2, 4, 6, 7, 8, 9 ]

let x = 1;
{
  let x = 2;
}
console.log(x);

// 1
console.log(0.1 + 0.2);
// 0.30000000000000004

let arr3 = [1, 4, 6, 7, 5, 8];
console.log(typeof arr3);
console.log(Array.isArray());
// object
// false
console.log([] + {});
// [object Object]
console.log(false + true);
// 1
console.log([1, 2, 3] + [4, 5, 6]);
// 1,2,34,5,6
console.log([...Array(3)].map((_, i) => i));
// [ 0, 1, 2 ]
console.log(typeof class {});
// function

const obj = {};
obj[true] = "a";
console.log(obj["true"]);
// a
console.log("5" * "3");
// 15
console.log("5" - 3);
// 2

console.log(3 > 2 > 1);
// false

console.log(1 < 2 < 3);
// true
console.log(typeof NaN);
//number

console.log([1] == [1]);
// false

console.log([1, 2, 3].filter(Boolean));
// [ 1, 2, 3 ]
console.log(typeof function () {});

// function
