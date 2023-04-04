const House = require("./houses.js");

test("showInfo should returen correct result", () => {
  const houset = new House("DGB2353", "14 Orion Terrance", 2, 595000, 340);
  expect(houset.showInfo()).toBe(
    "ID:DGB2353 Adderess: 14 Orion Terrance\nNumber of bedrooms: 2 Asking price: $595000\nPrice by area $1750.00\nPrice per room $297500.00\n***********"
  );
});
