import { describe, it } from 'vitest';
import runTest from '../fixtures/runTest.js';

describe('integration', () => {
  it('should render beehive', () => {

    // arrange
    const expected = [
      '......',
      '..xx..',
      '.x..x.',
      '..xx..',
      '......'
    ];
    const start = expected;

    // act & assert
    runTest(expected, start);

  });
});
