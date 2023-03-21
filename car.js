class Car {
  constructor(tank, kpl) {
    this.tank = tank; // The variables used
    this.kpl = kpl;
  }

  get getRange() {
    return this.range();
  }
  range() {
    //Mutiply the range and kpl to get range.
    return this.tank * this.kpl;
  }
}

suzukiSwift = new Car(100, 20);
appleCar = new Car(80, 24);

console.log(
  "The average range of the Suzuki Swift is " + suzukiSwift.range() + " km"
);
console.log(
  "The average range of the Apple car  is " + appleCar.range() + " km"
);

//console.log(
//  "The Apple car has a total fuel tank of " + appleCar.tank + " litres.\n"
//);

//console.log(
//  "The Suzuki Swift an average speed of " +
//    suzukiSwift.kpl +
//    " kilometres per litre."
//);
