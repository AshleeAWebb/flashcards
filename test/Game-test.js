const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card')
const Deck = require('../src/Deck')
const Round = require('../src/Round')
const Game = require('../src/Game')

describe('Game', () => {
    let game;
    let round;
    let deck;
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');


    beforeEach(() => {
        game = new Game();
        deck = new Deck([card1, card2, card3])
        round = new Round(deck);
    });

    it('should be a function', () => {
      expect(Game).to.be.a('function');
    });

    it('should be an instance of game', () => {
      expect(game).to.be.an.instanceOf(Game);
    })

    it('should keep track of the current round', () => {
      expect(game.currentRound).to.equal(null)
    });

    it('should be an instance of Deck', () => {
      expect(deck).to.be.an.instanceOf(Deck);
    });

    it('should create an array of cards', () => {
      expect(deck.cards.length).to.equal(3);
      expect(deck.cards[0]).to.deep.equal(card1);
      expect(deck.cards[1]).to.deep.equal(card2);
      expect(deck.cards[2]).to.deep.equal(card3);
    });

    it('should be an instance of Round', () => {
      const round = game.createRound(deck);
      game.setCurrentRound(round);
      expect(game.currentRound).to.be.an.instanceOf(Round);
      expect(round.deck).to.deep.equal(deck)
    });
  });
