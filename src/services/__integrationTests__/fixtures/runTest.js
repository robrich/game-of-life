import { expect } from 'vitest';
import turn from '../../turn.js';
import sortCells from '../../sortCells.js';

export default function runTest(expectedSpec, startSpec) {

  // arrange
  const expected = specToBoard(expectedSpec);
  const start = specToBoard(startSpec);
  const width = expectedSpec[0].length;
  const height = expectedSpec.length;

  // act
  const actual = turn(start, width, height);

  // assert
  expect(actual).toEqual(expected);

}

// given short-hand, make board squares
export function specToBoard(spec) {
  let cells = [];
  spec.forEach((row, y) => {
    row.split('').forEach((char, x) => {
      cells.push({
        x,
        y,
        alive: char !== '.'
      });
    });
  });
  cells = cells.filter(c => c.alive);
  cells = sortCells(cells);
  return cells;
}
