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

const main = () => {
  school1 = new School("Paultopia Primary", 5000, 250);
  school2 = new School("Yandere High School", 10, 100);

  schools = [];

  schools.push(school1, school2);

  schools.forEach((e) => {
    console.log(e.showInfo());
  });
};

main();
