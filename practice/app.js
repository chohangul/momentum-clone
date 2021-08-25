// function sayHello(nameOfPerson, age) {
//   console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
// }

// sayHello("nico", 10);
// sayHello("dal", 23);
// sayHello("lynn", 21);

// function plus(a, b) {
//   console.log(a / b);
// }

// plus(3, 6);

const player = {
  name: "nico",
  sayHello: function (otherPersonsName) {
    console.log("Hello " + otherPersonsName + ", nice to meet you!");
  },
};

player.sayHello("lynn");
player.sayHello("nico");
