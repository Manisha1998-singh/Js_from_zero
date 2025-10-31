const userEmail = [];
if (userEmail) {
  console.log("got user email.");
} else {
  console.log("dont have");
}

//falsy values
//false, 0,  -0, BigInt 0n, "", null, undefined, NaN

//truthy values
//"0", "false", " ", [], {}, function(){}
if (userEmail.length === 0) {
  console.log("Array empty");
}
const obj = {};
if (Object.keys(obj).length === 0) {
  console.log("object empty");
}

// NULLish coalescing operator (??): null undefined

let val1;
val1 = 5 ?? 10;
console.log(val1);
val1 = null ?? 10;
console.log(val1);
val1 = undefined ?? 10;

console.log(val1);
val1 = null ?? undefined ?? 10 ?? 20;
console.log(val1);

//Terniary oprtor

//condition ? true : false;

const iceCreamPrice = 100;
iceCreamPrice >= 80 ? console.log("less than") : console.log("more than");
