// const playerName = "nico";
// const playerPoints = 121212;
// const playerHandsome = false;
// const playerFat = "little bit";

// const player = ["nico", 1212, false, "little bit"];

const player = {
  name: "nico",
  points: 10,
  fat: true,
};

console.log(player);
// console.log(player.name);
console.log(player["name"]);
console.log(player.fat);
player.fat = false;
console.log(player.fat);
player.lastname = "potato";
player.points = player.points + 15;
console.log(player);
