import { Drug } from "../Drug/drug";


export class Pharmacy {
  drugs: Drug[];
  constructor(drugs: Drug[] = []) {
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
