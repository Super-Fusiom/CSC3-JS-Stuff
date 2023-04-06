class Question {
  //A bunch of programming questions in the quiz, no biggie
  constructor(question, answer, yuckers) {
    this.question = question;
    this.answer = answer;
    this.yuckers = yuckers;
    this.setAnswers();
  }
  setAnswers() {
    this.answer = this.yuckers;
    this.answer.sort(() => (Math.random() > 0.5 ? 1 : -1), this.answer);
  }
}
module.exports = Question;
