export class Drug {
  name: string;
  expiresIn: number;
  benefit: number;
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
  private isBenefitUnder50 = () => {
    return this.benefit < 50;
  };
  private isBenefitOver0 = () => {
    return this.benefit > 0;
  };

  private ratioChangeBenefit = () => {
    let ratio = 1;
    if (this.name != "Herbal Tea" && this.name != "Fervex") {
      ratio = -1;
    }
    if (this.expiresIn < 0) {
      ratio *= 2;
    }
    if (this.name == "Dafalgan") {
      ratio *= 2;
    }
    if (this.name == "Fervex") {
      if (this.expiresIn < 11) {
        ratio = 2;
      }
      if (this.expiresIn < 6) {
        ratio = 3;
      }
      if (this.expiresIn < 0) {
        ratio = -this.benefit;
      }
    }
    if (this.name == "Herbal Tea") {
      if (this.expiresIn < 0) {
        ratio = 2;
      }
      this.benefit += ratio;
      this.benefit = !this.isBenefitUnder50 ? 50 : this.benefit;
      this.benefit = !this.isBenefitOver0 ? 0 : this.benefit;
    }
    // -2x if expiresIn <0
    // benefit <0 = 0
    // herbal tea and expiresIn < 0 = +2x
    // >50 = 50
    // fervex : +2x expiresIn <11 && >6 +3x
    // TODO test
  };
  updateBenefitValue = () => {
    if (this.name == "Magic Pill") {
      return this;
    }
    this.ratioChangeBenefit();
    this.expiresIn = this.expiresIn - 1;
    return this;
  };
}
