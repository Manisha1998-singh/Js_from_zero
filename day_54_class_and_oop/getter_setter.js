class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    this._email = value;
  }
  get password() {
    //return this._password.toUpperCase();
    return `${this._password}manisha`;
  }

  set password(value) {
    this._password = value.toUpperCase();
  }
}

const manisha = new User("maanisha@gmail.com", "abccc");

console.log(manisha.password);
console.log(manisha.email);
//fine gren  way to access password
