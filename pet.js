function Pet(name) {
  this.name = name;
  this.age = 0;
  this.hunger = 0;
  this.fitness = 10;
  const maxFitness = 10;
  const leastHunger = 0;
  this.growUp = function () {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
  };
  Pet.prototype.walk = function () {
    if (this.fitness + 4 <= 10) {
      this.fitness += 4;
    } else {
      this.fitness = maxFitness;
    }
  };

  Pet.prototype.feed = function () {
    if (this.hunger > 3) {
      this.hunger -= 3;
    } else {
      this.hunger = leastHunger;
    }
  };
  Pet.prototype.checkUp = function () {
    if (this.fitness <= 3 && this.hunger >= 5) {
      return "I am hungry AND I need a walk";
    } else if (this.hunger >= 5) {
      return "I am hungry";
    } else if (this.fitness <= 3) {
      return "I need a walk";
    } else {
      return "I feel great!";
    }
  };
}

module.exports = Pet;
