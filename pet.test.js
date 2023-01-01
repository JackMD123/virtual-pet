const Pet = require("./pet");

describe("constructor", () => {
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
