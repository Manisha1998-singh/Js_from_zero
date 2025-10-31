class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`userName: ${this.username}`);
  }

  // if you dont want to aaccess  then we are using static method
  // static method can be called without creating an instance of the class
  static createId() {
    return `123`;
  }
}

const manisha = new User("manishaSingh");
//console.log(manisha.createId());

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const dataTea = new Teacher("manisaaa", "teaaa@gmail.com");
dataTea.logMe();
dataTea.createId();
