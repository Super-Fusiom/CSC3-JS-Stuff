const School = require("./school.js");

test("showInfo should return correct result", () => {
  const school = new School("Eveyln Intermediate", 1500, 96);
  expect(school.showInfo()).toBe(
    "Eveyln Intermediate has 15.63 pupils per room"
  );
});
