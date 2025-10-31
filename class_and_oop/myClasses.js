// ES6

// class declaration
// class is a special type of function
// it is a syntactical sugar over the prototype-based inheritance
// it is used to create objects and handle inheritance in a more readable way
// class constructor
// is a special method that is called when a new object is created using the class
// it is used to initialize the object properties and methods
class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    // console.log("got data from database");
    //console.log(`username: ${this.username}`);
    //console.log(this);
    return `${this.password}abc`;
  }

  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}
const chai = new User("chai", "chai@gmail.com", "1233");
//console.log(chai);
console.log(chai.encryptPassword());
console.log(chai.changeUsername());

// behind the scene, it is creating a new object and setting the prototype to User.prototype
// and then calling the constructor function with 'this' set to the new object

//same thing using function constructor
// function constructor
function User1(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}
User1.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};
User1.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`;
};

const tea = new User1("Tea", "chaiTea@gmail.com", "12336778");
console.log(tea.encryptPassword());
console.log(tea.changeUsername());
