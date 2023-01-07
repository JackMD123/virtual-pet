const Pet = require("./pet");

describe("constructor", () => {
  it("throws an error if the pet is not alive", () => {
    const pet = new Pet("Fido");

    pet.age = 31;

    expect(() => pet.checkUp()).toThrow("Your pet is no longer alive :(");
  });

  it("throws an error if the pet is not alive", () => {
    const pet = new Pet("Fido");

    pet.age = 31;

    expect(() => pet.walk()).toThrow("Your pet is no longer alive :(");
  });

  it("throws an error if the pet is not alive", () => {
    const pet = new Pet("Fido");

    pet.age = 31;

    expect(() => pet.growUp()).toThrow("Your pet is no longer alive :(");
  });

  it("throws an error if the pet is not alive", () => {
    const pet = new Pet("Fido");

    pet.age = 30;

    expect(() => pet.feed()).toThrow("Your pet is no longer alive :(");
  });

  it("Checks to see if pet is alive", () => {
    const pet = new Pet("Fido");

    expect(pet.isAlive).toEqual(true);
  });

  it("Gives fido a checkup", () => {
    const pet = new Pet("Fido");

    pet.checkUp();

    expect(pet.checkUp()).toEqual("I feel great!");
  });

  it("decrements the hunger level by 3", () => {
    const pet = new Pet("Fido");

    pet.feed();

    expect(pet.hunger).toEqual(0);
  });

  it("increments the fitness by 4 when 6 or less", () => {
    const pet = new Pet("Fido");

    pet.growUp();
    pet.walk();

    expect(pet.fitness).toEqual(10);
  });

  it("decrements the fitness by 3", () => {
    const pet = new Pet("Fido");

    pet.growUp();

    expect(pet.fitness).toEqual(7);
  });

  it("increments the hunger by 5", () => {
    const pet = new Pet("Fido");

    pet.growUp();

    expect(pet.hunger).toEqual(5);
  });

  it("increments the age by 1", () => {
    const pet = new Pet("Fido");

    pet.growUp();

    expect(pet.age).toEqual(1);
  });
  it("has a initial age of 0", () => {
    const pet = new Pet("Fido");

    expect(pet.age).toEqual(0);
  });
  it("returns an object", () => {
    expect(new Pet("Fido")).toBeInstanceOf(Object);
  });
});
