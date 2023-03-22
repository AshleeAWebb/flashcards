const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = deck.cards[0];
    this.turn = null;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.correctPercentage = 0;
  }
  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {
    this.turn = new Turn(guess, this.currentCard);
    this.turns++;
    if (this.turn.evaluateGuess()) {
      this.deck.cards.shift();
    } else {
      this.incorrectGuesses.push(this.currentCard.id);
    }
    this.currentCard = this.deck.cards[0];
    return this.turn.giveFeedback();
  }

  calculatePercentCorrect() {
    return Math.floor((1 - (this.incorrectGuesses.length / this.turns)) * 100);
  }

  endRound() {
    this.correctPercentage = this.calculatePercentCorrect();
    console.log(`**Round over!** You answered ${this.correctPercentage}% of the questions correctly!`);
    return `**Round over!** You answered ${this.correctPercentage}% of the questions correctly!`;
  }
}
module.exports = Round;