//object literal
const user = {
  username: "manisha",
  loginCount: 9,
  signOut: true,

  getuserDeatils: function () {
    console.log("got data from database");
    console.log(`username: ${this.username}`);
    console.log(this);
  },
};

console.log(user.username);
console.log(user.getuserDeatils());
console.log(this);

//const promiseOne = new Promise();

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
  //here return is by dafault, so you don't need to return this but its good for practice.
  //return this;
  return this;
}

// Here, both userOne and userTwo are referencing the same object (the global object or undefined in strict mode)
// because the User function does not use 'new'. To create separate instances, use 'new' keyword:

//const userOne = User("manisha", 9, true);
//const userTwo = User("manisha333", 999, false);

//console.log(userOne);
const userOne = new User("manisha", 9, true);
const userTwo = new User("manisha333", 999, false);
console.log(userOne);
console.log(userTwo);

// how work new keyword
// 1. Create a new object
// 2. Set the prototype of the new object to the prototype of the constructor function
// 3. Call the constructor function with 'this' set to the new object
// 4. Return the new object if the constructor does not return a different object
// 5. If the constructor returns a different object, that object is returned instead
//   } catch (error) {
//     console.log(error);
//   }
//   } finally {
