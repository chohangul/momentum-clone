// Conditionals

const age = parseInt(prompt("How old are you?"));

// console.log(isNaN(age));

if (isNaN(age)) {
  console.log("Please write a number");
} else if (age < 18) {
  console.log("you are too young");
} else {
  console.log("Thank you for writing your age");
}
