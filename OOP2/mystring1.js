// Task 6

class OneString {
  constructor(myString) {
    this.myString = myString;
  }

  get showString() {
    return "This string stores " + this.myString;
  }
}

st1 = new OneString("word");
st2 = new OneString("Ice");

console.log(st1.showString);
console.log(st2.showString);
