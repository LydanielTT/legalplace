import { Drug } from "../Drug/drug";


export class Pharmacy {
  drugs: Drug[];
  constructor(drugs: Drug[] = []) {
    this.drugs = drugs;
  }

  updateBenefitValue = () => {
    for (let drug of this.drugs) {
        drug.updateBenefitValue();
    }

    return this.drugs; // TODO work on deep copy for mutability issues
  };
}

export default Pharmacy;
