class Country {
  constructor(name, continent, leader, population, capital, landArea, gdp) {
    this.name = name;
    this.continent = continent;
    this.leader = leader;
    this.population = population;
    this.capital = capital;
    this.landArea = landArea;
    this.gdp = gdp;
  }

  get gdpPerCapita() {
    return this.gdp / this.population;
  }
}

northKorea = new Country(
  "North Korea",
  "Asia",
  "Kim Joug Un",
  5,
  "Pyongyang",
  50000,
  250000
);

console.log(northKorea.gdpPerCapita);
