let readline = require("readline-sync");

class School {
  constructor(name, pupils, classrooms) {
    this.name = name;
    this.pupils = pupils;
    this.classrooms = classrooms;
  }
  pupilPerClass() {
    return this.pupils / this.classrooms;
  }
  showInfo() {
    return (
      this.name + " has " + this.pupilPerClass().toFixed(2) + " pupils per room"
    );
  }
}
// Testing purposes
module.exports = School;

schName = readline.question("Wha is the name of the school?\n");
sh = schName;

numPupils = readline.question("How many pupils are there in school?\n");
np = numPupils;

numClassrooms = readline.question(
  "How many classroms are there in the school?\n"
);
nc = numClassrooms;

school1 = new School(sh, np, nc);

schName = readline.question("Wha is the name of the school?\n");
sh = schName;

numPupils = readline.question("How many pupils are there in school?\n");
np = numPupils;

numClassrooms = readline.question(
  "How many classroms are there in the school?\n"
);
nc = numClassrooms;

school2 = new School(sh, np, nc);

console.log(school1.showInfo());
console.log(school2.showInfo());
