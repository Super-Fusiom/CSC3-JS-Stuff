let readline = require("readline-sync");

class TeamSport {
  constructor(sportName, numPlayers) {
    this.sportName = sportName;
    this.numPlayers = numPlayers;
  }

  storeInfo() {
    this.sportName = sportName;
    this.numPlayers = numPlayers;
  }
  showInfo() {
    return (
      this.sportName +
      " is a team sport\nThere are " +
      this.numPlayers +
      " players in a " +
      this.sportName +
      " team"
    );
  }
}

const getInfo = () => {
  let sport = readline.question("What is a team sport?\n");

  sp = sport;

  let num = readline.question("How many players are in " + sp + "\n");
  nm = num;
};

getInfo();
ts1 = new TeamSport(sp, nm);
getInfo();
ts2 = new TeamSport(sp, nm);

console.log(ts1.showInfo());
console.log(ts2.showInfo());
