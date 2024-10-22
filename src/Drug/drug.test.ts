import { Drug } from "../Drug/drug";
import { jest, describe, expect, it } from "@jest/globals";

describe("Drug", () => {
  it("should decrease the benefit and expiresIn", () => {
    const drugTest = new Drug("test", 2, 3);
    drugTest.updateBenefitValue();
    expect(JSON.stringify(drugTest)).toEqual(
      JSON.stringify(new Drug("test", 1, 2))
    );
  });
  it("Dafalgan should decrease the benefit x2", () => {
    const drugTest = new Drug("Dafalgan", 2, 3);
    drugTest.updateBenefitValue();
    expect(JSON.stringify(drugTest)).toEqual(
      JSON.stringify(new Drug("Dafalgan", 1, 1))
    );
  });
});
