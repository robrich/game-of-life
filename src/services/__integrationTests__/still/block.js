import { describe, it } from 'vitest';
import runTest from '../fixtures/runTest.js';

describe('integration', () => {
  it('should render block', () => {

    // arrange
    const expected = [
      '....',
      '.xx.',
      '.xx.',
      '....'
    ];
    const start = expected;

    // act & assert
    runTest(expected, start);

  });
});
