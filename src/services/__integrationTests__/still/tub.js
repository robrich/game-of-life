import { describe, it } from 'vitest';
import runTest from '../fixtures/runTest.js';

describe('integration', () => {
  it('should render loaf', () => {

    // arrange
    const expected = [
      '.....',
      '..x..',
      '.x.x.',
      '..x..',
      '.....'
    ];
    const start = expected;

    // act & assert
    runTest(expected, start);

  });
});
