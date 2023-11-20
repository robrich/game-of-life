import { describe, it } from 'vitest';
import runTest from '../fixtures/runTest.js';

describe('integration', () => {
  it('should render beacon', () => {

    // arrange
    const start = [
      '......',
      '.xx...',
      '.xx...',
      '...xx.',
      '...xx.',
      '......'
    ];
    const expected = [
      '......',
      '.xx...',
      '.x....',
      '....x.',
      '...xx.',
      '......'
    ];

    // act & assert
    // it oscilates, so test both ways:
    runTest(expected, start);
    runTest(start, expected);

  });
});
