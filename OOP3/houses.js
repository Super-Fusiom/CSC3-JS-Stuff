class House {
  constructor(id, address, bedrooms, askPrice, area) {
    this.id = id;
    this.address = address;
    this.bedrooms = bedrooms;
    this.askPrice = askPrice;
    this.area = area;
  }

  pricePerArea() {
    return this.askPrice / this.area;
  }

  pricePerRoom() {
    return this.askPrice / this.bedrooms;
  }

  showInfo() {
    return (
      "ID:" +
      this.id +
      " Adderess: " +
      this.address +
      "\nNumber of bedrooms: " +
      this.bedrooms +
      " " +
      "Asking price: $" +
      this.askPrice +
      "\nPrice by area $" +
      this.pricePerArea().toFixed(2) +
      "\nPrice per room $" +
      this.pricePerRoom().toFixed(2) +
      "\n***********"
    );
  }
}

module.exports = House;

house1 = new House("DGB2355", "3 Paul Way", 7, 1_200_000, 500);
house2 = new House("DGB2356", "6 GB Road", 5, 800_000, 320);
house3 = new House("DGB2357", "123 Sesame street", 2, 500_000, 120);
houses = [];
houses.push(house1, house2, house3);

houses.forEach((e) => {
  console.log(e.showInfo());
});
