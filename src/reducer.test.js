import reducer from './reducer';
import {generateAuralUpdate, restartGame, makeGuess} from './actions';

describe('reducer', () => {
  let state;

  let correctAnswer = 65;

  let guess1 = 3;
  let guess2 = 20;
  let guess3 = 50;
  let guess4 = 60;
  let guess5 = 65;

  let currentGuesses = [];

  let currentState = {
    guesses: [],
    feedback: 'Make your guess!',
    auralStatus: '',
    correctAnswer: 65
  }

  describe('restartGame', () => {
    state = reducer(state, restartGame(correctAnswer));
    expect(state).toEqual(currentState);
  });

  describe('makeGuess', () => {
    it('Should make a new guess', () => {
      state = reducer(state, makeGuess(guess1));
      currentGuesses.push(guess1);
      expect(state.guesses).toEqual(
        currentGuesses
      );
      expect(state.feedback).toEqual('You\'re Ice Cold...')
    });

    it('Should make a new guess', () => {
      state = reducer(state, makeGuess(guess2));
      currentGuesses.push(guess2);
      expect(state.guesses).toEqual(
        currentGuesses
      );
      expect(state.feedback).toEqual('You\'re Cold...')
    });

    it('Should make a new guess', () => {
      state = reducer(state, makeGuess(guess3));
      currentGuesses.push(guess3);
      expect(state.guesses).toEqual(
        currentGuesses
      );
      expect(state.feedback).toEqual('You\'re Warm.')
    });

    it('Should make a new guess', () => {
      state = reducer(state, makeGuess(guess4));
      currentGuesses.push(guess4);
      expect(state.guesses).toEqual(
        currentGuesses
      );
      expect(state.feedback).toEqual('You\'re Hot!')
    });

    it('Should make a new guess', () => {
      state = reducer(state, makeGuess(guess5));
      currentGuesses.push(guess5);
      expect(state.guesses).toEqual(
        currentGuesses
      );
      expect(state.feedback).toEqual('You got it!')
    });
    
    it('Should return guesses fromGenerateAuralUpdate', () => {
      state = reducer(state, generateAuralUpdate(''));
      expect(state.auralStatus).toEqual('Here\'s the status of the game right now: You got it! You\'ve made 5 guesses. In order of most- to least-recent, they are: 65, 60, 50, 20, 3')
    });
  });
});