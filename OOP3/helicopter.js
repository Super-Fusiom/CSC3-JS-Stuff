class Helicopter {
  constructor(num) {
    this.num = num;
  }
  upDown() {
    if (this.num > 50) {
      return this.num + " down";
    } else {
      return this.num + " up";
    }
  }
}

let helicopters = [];
for (let i = 1; i <= 50; i++) {
  helicopters[i] = new Helicopter(i);
}
for (let i = 51; i <= 100; i++) {
  helicopters[i] = new Helicopter(i);
}
helicopters.forEach((e) => {
  console.log(e.upDown());
});
