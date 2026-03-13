class User {
  constructor(usernam) {
    this.username = usernam;
  }

  logMe() {
    console.log(`User Name: ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourser() {
    console.log(`new course added by ${this.username}`);
  }
}

const newTeacher = new Teacher("manisha", "chai@gmail.com", "12344");
const oldTeacher = new User("manishasingh");

console.log(newTeacher);
newTeacher.addCourser();
newTeacher.logMe();
//oldTeacher.addCourser();
console.log(newTeacher instanceof Teacher);
console.log(newTeacher instanceof User);
console.log(Teacher instanceof User);
console.log(User instanceof Teacher);
console.log(oldTeacher instanceof User);
console.log(oldTeacher instanceof Teacher);
console.log(newTeacher === Teacher);
console.log(newTeacher === oldTeacher);
