function User(email, password) {
  this.email = email;
  this.password = password;
}

Object.defineProperty(this, "email", {
  get: function () {
    return this._email.toUpperCase();
  },

  set: function (value) {
    this._email = value.toUpperCase();
  },
});
Object.defineProperty(this, "password", {
  get: function () {
    return this._password.toUpperCase();
  },

  set: function (value) {
    this._password = value.toUpperCase();
  },
});

const manisha = new User("singh@gmail.com", "123456");
console.log(manisha);
console.log(manisha.email);
