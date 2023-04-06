let readline = require("readline-sync");
const Question = require("./question");

class Quiz {
  constructor() {
    this.questions = [
      new Question(
        "Out of the programming lanaguages, which one doesn't have object oriented programming?\n",
        "C",
        ["C++", "Python", "Ruby"]
      ),
      new Question("Which OS has the highest market share?", "Windows", [
        "Mac",
        "Linux",
        "FreeBSD",
      ]),
    ];
  }
  takeQuiz() {
    this.questions.forEach((p) => {
      console.log(p.question);
      for (let i = 0; i < p.answer.length; i++) {
        console.log("\t" + i + "\t" + p.answer[i]);
        this.processAnswer(p);
      }
    });
  }

  processAnswer(p) {
    let userAnswer = -1;
    while (!0 <= userAnswer <= p.answer.length) {
      let a = readline.question("Type the number of your answer hear: ");
      try {
        ans = parseInt(a);
      } catch {
        console.log("WHOLE NUMBERS ONLY!!!");
      }
    }
  }
}

quizer = new Quiz();

quizer.takeQuiz();
