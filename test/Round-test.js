const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');


describe('Round', function () {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

    const deck = new Deck([card1, card2, card3]);

    const round = new Round(deck);

    it('should be a function', function () {
        const round = new Round(deck);
        expect(Round).to.be.a('function');
    });

    it('should be an instance of Round', function () {
        const round = new Round(deck);
        expect(round).to.be.an.instanceOf(Round);
    });

    it('should be the first Card in the Deck at the start of the Round', function () {
        const round = new Round(deck);
        expect(round.returnCurrentCard()).to.equal(card1);
        console.log(round.currentCard);
    });

    it('should store incorrect guesses in an array', function () {
        const round = new Round(deck);
        round.takeTurn('pug');
        expect(round.incorrectGuesses[0]).to.equal(1);
        console.log(round.currentCard);
    });

    it('should evaluate guesses and give a response', function () {
        const round = new Round(deck);
        expect(round.takeTurn('sea otter')).to.equal('correct!');
        expect(round.takeTurn('pug')).to.equal('incorrect!');
        console.log(round.currentCard);
    });

    it('should evaluate guesses and give a response of next card in array', function () {
        const round = new Round(deck);
        expect(round.takeTurn('gallbladder')).to.equal('correct!');
        expect(round.takeTurn('spleen')).to.equal('incorrect!');
        console.log(round.currentCard);
    });

    it('should update turn count', function () {
        const round = new Round(deck);
        round.takeTurn('sea otter');
        expect(round.turns).to.equal(1);
        round.takeTurn('spleen');
        expect(round.turns).to.equal(2);
    });

    it('should update turn count', function () {
        const round = new Round(deck);
        round.takeTurn(round);
        round.takeTurn(round);
        round.takeTurn(round);
        console.log(round.currentCard);
        expect(round.turns).to.equal(3);
    });

    it('should calculate and return the percentage of correct guesses', function () {
        const newDeck = new Deck([card1, card2, card3]);
        const round = new Round(newDeck);
        round.takeTurn('sea otter');
        round.takeTurn('spleen');
        round.takeTurn('watching Netflix');
        expect(round.calculatePercentCorrect()).to.equal(33);
    });

    it('should print to the console a round over pharse with the percentage correct', function () {
        const newDeck = new Deck([card1, card2, card3]);
        const round = new Round(newDeck);
        round.takeTurn('sea otter');
        round.takeTurn('spleen');
        round.takeTurn('watching Netflix');
        expect(round.endRound()).to.equal('**Round over!** You answered 33% of the questions correctly!');
    });
});