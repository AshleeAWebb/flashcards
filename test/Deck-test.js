const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', () => {
    let deck;
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');

    beforeEach(() => {
        deck = new Deck([card1, card2, card3]);
    });

    it('should be a function', () => {
        expect(Deck).to.be.a('function');
    });

    it('should be an instance of Deck', () => {
        expect(deck).to.be.an.instanceOf(Deck);
    });

    it('should be initialized with an array of Card objects', () => {
        expect(deck.cards).to.deep.equal([card1, card2, card3]);
    });

    it('should be able to count how many cards are in the deck', () => {
        expect(deck.countCards()).to.equal(3);
    });
});