const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button) {
  debugger;
  console.log(button);
  button.addEventListener("click", function (e) {
    debugger;
    console.log(e);
    console.log(e.target);
    if (e.target.id === "grey") {
      debugger;
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "white") {
      debugger;
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "blue") {
      debugger;
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "green") {
      debugger;
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "red") {
      debugger;
      body.style.backgroundColor = e.target.id;
    }
  });
});
