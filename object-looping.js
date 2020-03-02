function Hero() {
  this.hero = "any hero";
  this.power = "any power";
}
Hero();

let squirrel = new Hero();
// console.log(squirrel.hero);
squirrel.vision = "lazers";
squirrel.power = "flying";

Hero.prototype.cost = "arguable";

for (let prop in squirrel) {
  console.log(prop);
}
