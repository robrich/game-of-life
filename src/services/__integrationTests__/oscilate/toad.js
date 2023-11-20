import { describe, it } from 'vitest';
import runTest from '../fixtures/runTest.js';

describe('integration', () => {
  it('should render toad', () => {

    // arrange
    const start = [
      '......',
      '......',
      '..xxx.',
      '.xxx..',
      '......',
      '......'
    ];
    const expected = [
      '......',
      '...x..',
      '.x..x.',
      '.x..x.',
      '..x...',
      '......'
    ];

    // act & assert
    // it oscilates, so test both ways:
    runTest(expected, start);
    runTest(start, expected);

  });
});
