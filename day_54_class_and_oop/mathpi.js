const descripter = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descripter);
console.log(Math.PI);
Math.PI = 5;
console.log(Math.PI);

const chai = {
  name: "ginger chai",
  price: 250,
  isAvailable: true,

  orderChai: function () {
    console.log("not able to order chai");
  },
};

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name", {
  writeable: false,
  enumerable: false,
  configurable: false,
});
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

//chai.name = "masala chai";
console.log(chai.name); // still "ginger chai"
console.log(Object.getOwnPropertyDescriptor(chai, "name"));
console.log(chai);

for (let [key, vale] of Object.entries(chai)) {
  if (typeof value === "function") {
    console.log(`${key}: ${vale}`);
  }
}
