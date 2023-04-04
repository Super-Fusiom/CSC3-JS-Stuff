class Movie {
  constructor(title, producer, date, length, rating, genre, cost, revenue) {
    this.title = title;
    this.producer = producer;
    this.date = date;
    this.length = length;
    this.rating = rating;
    this.genre = genre;
    this.cost = cost;
    this.revenue = revenue;
  }

  get netWorth() {
    return this.revenue - this.cost;
  }
}

beeMovie = new Movie(
  "Bee movie",
  "Simon J. Smith",
  "2/11/2007",
  1.51,
  "49%",
  "Family/Adventure",
  150_000_000,
  2_935_000_000
);

console.log(beeMovie.netWorth);
