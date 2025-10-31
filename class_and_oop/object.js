function multipleBy5(num) {
  return num * 5;
}

//multipleBy5(5);
multipleBy5.power = 2;
console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUserName(username, score) {
  this.username = username;
  this.score = score;
}
createUserName.prototype.increment = function () {
  this.score++;
};
createUserName.prototype.printMe = function () {
  console.log(`score of ${this.score}`);
};
const chai = new createUserName("chai", 25);
const tea = new createUserName("tea", 250);
chai.printMe();
tea.printMe();

//here's whta happens when you use 'new' keyword:
// 1. A new object is created. the new keyword creates a new object and sets it as the context for the function call.
// 2. The prototype of the new object is set to the prototype of the constructor function
// 3. The constructor function is called with 'this' set to the new object
// 4. If the constructor function does not return an object, the new object is returned by default
// 5. If the constructor function returns an object, that object is returned instead of the
