const data = require('./data')
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card')
const Deck = require('../src/Deck')
const Round = require('../src/Round')

class Game {
  constructor() {
    this.currentRound = null;
  } 

  createDeck(cards) {
    return new Deck(cards);
  }

  createRound(deck) {
    return new Round(deck);
  }

  setCurrentRound(round) {
    this.currentRound = round;
  }

  start() {
    const cards = prototypeQuestions.map((card) => new Card(card.id, card.question, card.answers, card.correctAnswer));
    const deck = this.createDeck(cards);
    const round = this.createRound(deck);
    this.setCurrentRound(round);
    this.printMessage(deck, round);
    this.printQuestion(round);
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