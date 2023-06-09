class BasketballPlayer {
  constructor(name, games, goals) {
    this.name = name;
    this.games = games;
    this.goals = goals;
  }

  get averageGoals() {
    return this.goals / this.games;
  }
}

james = new BasketballPlayer("James", 5, 7);

e = new BasketballPlayer("Edo", 3, 5);

players = [];

players.push(james, e);

players.forEach((e) => {
  console.log(e.averageGoals);
});
