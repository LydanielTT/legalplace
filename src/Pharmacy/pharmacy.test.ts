import { Drug } from "../Drug/drug";
import Pharmacy from "./pharmacy";
import { jest, describe, expect, it } from "@jest/globals";

jest.mock("../Drug/drug");

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    const pharmacy = new Pharmacy([new Drug("test", 2, 3)]);
    pharmacy.updateBenefitValue();
    expect(Drug).toHaveBeenCalled();
  });
});
