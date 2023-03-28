const depreciation = 0.67;

class Phone {
  constructor(brand, storage, releaseYear, price, yearsUsed) {
    this.brand = brand;
    this.storage = storage;
    this.releaseYear = releaseYear;
    this.price = price;
    this.yearsUsed = yearsUsed;
  }

  phoneDepreciation() {
    return this.price * depreciation * 2;
  }

  get gigabytePerDollar() {
    return this.storage / this.price;
  }
}

fusiomPhone = new Phone("Super_Fusiom", 128, 2023, 500, 3);
console.log("Your phone has depreciated by " + fusiomPhone.phoneDepreciation());
