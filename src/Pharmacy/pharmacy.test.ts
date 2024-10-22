import Pharmacy from "./pharmacy";

const Drug = jest.fn().mockReturnValue((name, expiresIn, benefit) => ({
  name,
  expiresIn,
  benefit,
}));

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });
});
