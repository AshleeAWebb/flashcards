const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', () => {
    let card, turn;

    beforeEach(() => {
        card = new Card(1, 'What?', ['Random answer 1', 'Random answer 2', 'Random answer 3'], 'Random answer 1');
        turn = new Turn('Random answer 1', card);
    });

    it('should be a function', () => {
        expect(Turn).to.be.a('function');
    });

    it('should be an instance of Turn', () => {
        expect(turn).to.be.an.instanceof(Turn);
    });

    it('should store a string for user\'s guess', () => {
        expect(turn.userGuess).to.equal('Random answer 1');
    });

    it('should store an object for current card', () => {
        expect(turn.card).to.equal(card);
    });

    it('should return user\'s guess', () => {
        expect(turn.returnGuess()).to.equal('Random answer 1');
    });

    it('should return a card', () => {
        expect(turn.returnCard()).to.equal(card);
    });

    it('should evaluate if user\'s guess is correct', () => {
        expect(turn.evaluateGuess()).to.equal(true);
    });

    it('should evaluate if user\'s guess is incorrect', () => {
        const incorrectTurn = new Turn('Random answer 2', card);
        expect(incorrectTurn.evaluateGuess()).to.equal(false);
    });

    it('should give feedback based on user\'s guess', () => {
        expect(turn.giveFeedback()).to.equal('correct!');
    });

    it('should give feedback based on user\'s guess', () => {
        const incorrectTurn = new Turn('Random answer 2', card);
        expect(incorrectTurn.giveFeedback()).to.equal('incorrect!');
    });
});