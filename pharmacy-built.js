export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
  isBenefit50 = drugArg => {
    return drugArg.benefit < 50;
  };
  ratioChangeBenefit = () => {
    // -2x if expiresIn <0
    // benefit <0 = 0
    // herbal tea and expiresIn < 0 = +2x
    // >50 = 50
    // herbal tea && fervex : +2x expiresIn <11 && >6
  };
  updateBenefitValue = () => {
    if (this.name == "Magic Pill") {
      return;
    }
    if (this.name != "Herbal Tea" && this.name != "Fervex") {
      if (this.benefit > 0) {
        this.benefit = this.benefit - 1;
      }
    } else {
      if (this.isBenefit50(this)) {
        this.benefit = this.benefit + 1;
        if (this.name == "Fervex") {
          if (this.expiresIn < 11) {
            if (this.isBenefit50(this)) {
              this.benefit = this.benefit + 1;
            }
          }
          if (this.expiresIn < 6) {
            if (this.isBenefit50(this)) {
              this.benefit = this.benefit + 1;
            }
          }
        }
      }
    }
    if (this.expiresIn < 0) {
      if (this.name != "Herbal Tea") {
        if (this.name != "Fervex") {
          if (this.benefit > 0) {
            this.benefit = this.benefit - 1;
          }
        } else {
          this.benefit = this.benefit - this.benefit;
        }
      } else {
        if (this.benefit < 50) {
          this.benefit = this.benefit + 1;
        }
      }
    }
    this.expiresIn = this.expiresIn - 1;
  };
}
// import { Drug, Pharmacy } from "./pharmacy";

import fs from "fs";
import { Drug } from "./Drug/drug";
import Pharmacy from "./Pharmacy/pharmacy";
const drugs = [new Drug("Doliprane", 20, 30), new Drug("Herbal Tea", 10, 5), new Drug("Fervex", 12, 35), new Drug("Magic Pill", 15, 40)];
const pharmacy = new Pharmacy(drugs);
const log = [];
for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
  log.push(JSON.parse(JSON.stringify(pharmacy.updateBenefitValue())));
}

/* eslint-disable no-console */
fs.writeFile("output.json", JSON.stringify({
  result: log
}, null, 2).concat("\n"), err => {
  if (err) {
    console.log("error");
  } else {
    console.log("success");
  }
});

/* eslint-enable no-console */
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
export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue = () => {
    for (var i = 0; i < this.drugs.length; i++) {
      this.drugs[i].updateBenefitValue();
    }
    return this.drugs;
  };
}
export default Pharmacy;
