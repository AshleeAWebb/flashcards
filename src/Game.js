const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const data = require('./data')

class Game {
  constructor() {
    this.currentRound = null;
  }
start() {
  const cards = prototypeData.map(cardData => new Card(cardData.id, cardData.question, cardData.answers, cardData.correctAnswer));

  const deck = new Deck(cards);
  this.currentRound = new Round(deck);
  this.printMessage(deck, this.currentRound);
  this.printQuestion(this.currentRound);

}
  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}


module.exports = Game;