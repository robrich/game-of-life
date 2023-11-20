import { describe, it, expect } from 'vitest';

import nextState from '../nextState.js';

describe('nextState', () => {

  // Any live cell with fewer than two live neighbours dies, as if by underpopulation.
  [0,1].forEach(neighbors => {
    it(`live cell with ${neighbors} neighbors dies`, () => {

      // arrange
      const expected = false;
      const wasAlive = true;

      // act
      const actual = nextState(neighbors, wasAlive);

      // assert
      expect(actual).toBe(expected);

    });
  });

  // Any live cell with two or three live neighbours lives on to the next generation.
  [2,3].forEach(neighbors => {
    it(`live cell with ${neighbors} neighbors lives`, () => {

      // arrange
      const expected = true;
      const wasAlive = true;

      // act
      const actual = nextState(neighbors, wasAlive);

      // assert
      expect(actual).toBe(expected);

    });
  });

  // Any live cell with more than three live neighbours dies, as if by overpopulation.
  [4,5,6,7,8].forEach(neighbors => {
    it(`live cell with ${neighbors} neighbors dies`, () => {

      // arrange
      const expected = false;
      const wasAlive = true;

      // act
      const actual = nextState(neighbors, wasAlive);

      // assert
      expect(actual).toBe(expected);

    });
  });


  // Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction
  [3].forEach(neighbors => {
    it(`dead cell with ${neighbors} neighbors dies`, () => {

      // arrange
      const expected = true;
      const wasAlive = false;

      // act
      const actual = nextState(neighbors, wasAlive);

      // assert
      expect(actual).toBe(expected);

    });
  });
  [1,2,4,5,6,7,8].forEach(neighbors => {
    it(`dead cell with ${neighbors} neighbors dies`, () => {

      // arrange
      const expected = false;
      const wasAlive = false;

      // act
      const actual = nextState(neighbors, wasAlive);

      // assert
      expect(actual).toBe(expected);

    });
  });

});
