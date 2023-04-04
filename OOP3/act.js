class Act {
  constructor() {
    this.isMale = true;
  }

  setFemale() {
    this.isMale = false;
  }

  showGender() {
    if (this.isMale == false) {
      return "F";
    } else {
      return "M";
    }
  }
}

acts = [];

for (let i = 1; i <= 35; i++) {
  acts[i] = new Act();
}

acts.forEach((e, i) => {
  if (i % 5) {
    return;
  } else {
    e.setFemale();
  }
});

acts.forEach((e) => {
  if (e.showGender() !== undefined) {
    console.log(e.showGender());
  }
});
