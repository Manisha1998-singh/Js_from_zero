const User = {
  _email: "manisha@gmail.com",
  _password: "ABC",

  get email() {
    return this._email.toUpperCase;
  },
  set email(value) {
    this._email = value;
  },
};

//factory function
const Tea = Object.create(User);
console.log(Tea.email);
