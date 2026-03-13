//STACKBlitZ
const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#result");

  //if (height === '' || height < 0 || height === NaN) { old way for checking NAN
  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `Please enter  a valid height ${height}`;
    console.log(height);
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please enter  a valid weight ${weight}`;
    console.log(weight);
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //result.innerHTML = `<h5>Your Body BMI is: ${bmi}</h5>`;
    if (bmi < 18.6) {
      result.innerHTML = `<h5>Your Body BMI is less: ${bmi}</h5>`;
    }
    if (bmi >= 18.6 && bmi <= 24.9) {
      result.innerHTML = `<h5>Your Body BMI is Normal: ${bmi}</h5>`;
    }
    if (bmi > 24.9) {
      result.innerHTML = `<h5>Your Body BMI is Over Weight: ${bmi}</h5>`;
    }
  }
});
