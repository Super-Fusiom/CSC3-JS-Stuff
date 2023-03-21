class Phone {
  constructor(brand, storage, releaseYear, price) {
    this.brand = brand;
    this.storage = storage;
    this.releaseYear = releaseYear;
    this.price = price;
  }

  get gigabytePerDollar() {
    return this.storage / this.price;
  }
}

fusiomPhone = new Phone("Super_Fusiom", 128, 2023, 500);

console.log(fusiomPhone.gigabytePerDollar);
