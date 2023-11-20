import { describe, it, expect } from 'vitest';

import sortCells from '../sortCells.js';

describe('sortCells', () => {

  it('should sort cells', () => {

    // arrange
    const start = [
      {x:3,y:2},
      {x:4,y:1},
      {x:1,y:4},
      {x:3,y:3},
      {x:2,y:2},
      {x:4,y:4},
      {x:1,y:1},
      {x:2,y:3}
    ];
    const expected = [
      {x:1,y:1},
      {x:1,y:4},
      {x:2,y:2},
      {x:2,y:3},
      {x:3,y:2},
      {x:3,y:3},
      {x:4,y:1},
      {x:4,y:4}
    ];

    // act
    const actual = sortCells(start);

    // assert
    expect(actual).toEqual(expected);

  });
});
