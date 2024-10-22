class Drug {
  name: string;
  expiresIn: number;
  benefit: number;
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
  private isBenefit50 = (drugArg) => {
    return drugArg.benefit < 50;
  };

  updateBenefitValue = () => {
    if (this.name != "Herbal Tea" && this.name != "Fervex") {
      if (this.benefit > 0) {
        if (this.name != "Magic Pill") {
          this.benefit = this.benefit - 1;
        }
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
    if (this.name != "Magic Pill") {
      this.expiresIn = this.expiresIn - 1;
    }
    if (this.expiresIn < 0) {
      if (this.name != "Herbal Tea") {
        if (this.name != "Fervex") {
          if (this.benefit > 0) {
            if (this.name != "Magic Pill") {
              this.benefit = this.benefit - 1;
            }
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
  };
}

export default Drug;
