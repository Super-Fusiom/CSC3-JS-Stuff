// Task 7

class OneString {
  constructor(inputString) {
    this.inputString = inputString;
  }

  setString(inputString) {
    this.inputString = inputString;
  }

  showString() {
    return "Your string is " + this.inputString;
  }
}

st1 = new OneString("Im here");
st2 = new OneString("e");
st1.setString("no you're not");
st2.setString("r");

console.log(st1.showString());
console.log(st2.showString());
