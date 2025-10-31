//for loop

for (let i = 0; i < 10; i++) {
  const element = i;

  if (element == 5) {
    console.log("5 is best number");
  }
  console.log(element);
}
//console.log(element);

for (let i = 0; i < 10; i++) {
  //const element = array[index];
  console.log(`outer loop value ${i}`);
  for (let j = 0; j < 5; j++) {
    //console.log(`inner loop value ${j} outer loop value ${i}`);
    console.log(i + "*" + j + " = " + i * j);
  }
}

let myArray = ["flash", "batman", "superman"];
for (let index = 0; index <= myArray.length; index++) {
  const element = myArray[index];
  console.log(element);
}

//break and continue
