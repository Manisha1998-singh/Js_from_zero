const PromiseOne = new Promise(function (resolve, reject) {
  //Do an async task
  //DB calls, cryptography, network
  setTimeout(function () {
    console.log("async task is completed");
    resolve();
  }, 1000);
});

PromiseOne.then(function () {
  console.log("promise is consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("async task is completed in promiseTwo");
    resolve();
  }, 1000);
}).then(function () {
  console.log("async two resolve");
});

const promiseThird = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Manisha", email: "mish@exaple.com" });
  }, 1000);
});
promiseThird.then(function (user) {
  console.log(user);
});

const promiseFourth = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "Manisha", email: "chai@eaxplem.com" });
    } else {
      reject("something went wrong");
    }
  }, 1000);
});
//const username = promiseFourth // not a right way to do it
promiseFourth
  .then(function (user) {
    console.log(user);
    return user.username;
  })
  .then(function (username) {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log("finally block executed");
  });

const promiseFifth = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "java", password: "123" });
    } else {
      reject("ERROR: everything went wrong");
    }
  }, 1000);
});

async function consumeFive() {
  // await promiseFifth(); // you can not hold like this because its a object
  try {
    const response = await promiseFifth;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumeFive();

// async function getProfile() {
//   // const response = await fetch("https://api.github.com/users/Manisha-singh");
//   // const data = await response.json();
//   // console.log(data);

//   try {
//     const response = await fetch("https://api.github.com/users/Manisha-singh");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("error fetching profile");
//   }
// }

// getProfile();

fetch("https://api.github.com/users/Manisha-singh")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log("error");
  });
