class Person {
  constructor(name, year, isMale) {
    this.name = name;
    this.year = year;
    this.isMale = isMale;
  }
  get currantAge() {
    const currentYear = new Date();
    return currentYear.getFullYear() - this.year;
  }

  get checkGender() {
    if (this.isMale == true) {
      return "He is male.\n";
    } else {
      return "She is female.\n";
    }
  }

  get printInfo() {
    return (
      this.name +
      " will be " +
      this.currantAge +
      " this year. " +
      this.checkGender
    );
  }
}

paul = new Person("Paul", 2005, true);

console.log(paul.printInfo);
