let myName = "manisha     ";
//console.log(myName.trim().length);
//console.log(myName.truelength);

let myHero = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPawar: function () {
    console.log(`spaiderman  power is ${this.spiderman}`);
  },
};

Object.prototype.manisha = function () {
  console.log(`my name is manisha`);
};

Array.prototype.heyManisha = function () {
  console.log(`manisha says hello`);
};
//heroPower.manisha();
//myHero.manisha();
//myHero.heyManisha();

//note here we are not able to accesss herePower.heyManisha() because we are not using prototype on heroPower object
// new object. This allows the constructor function to return a different object if needed, but if it does not, the new object created by 'new' is returned.
// 6. The new object is returned to the caller, allowing it to be used as an instance of the constructor function.
//heroPower.heyManisha();

// Inheritance

const user = {
  name: "chai",
};
const Teacher = {
  makeVideo: true,
};
const TeachingSupport = {
  isAvailable: false,
};
const TASupport = {
  makeAssignment: "JS Assignment",
  fullTime: true,
  __proto__: TeachingSupport, // Setting the prototype chain
};

Teacher.__proto__ = user;

/// mordern syntax for inheritance

Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = "chaiCode     ";
String.prototype.truelength = function () {
  console.log(`${this}`);
  console.log(`${this.name}`);
  console.log(` true length is: ${this.trim().length}`);
};
anotherUsername.truelength();
"manisha".truelength();
"iceTea".truelength();
