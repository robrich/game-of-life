import cellsToConsider from "./cellsToConsider";
import turnForCell from "./turnForCell";
import trimToBoard from "./trimToBoard";
import sortCells from './sortCells.js';

// given last turn get next turn
export default function turn(lastTurn, width, height) {
  // @ish I could use JavaScript pipes
  // https://github.com/tc39/proposal-pipeline-operator
  const c1 = cellsToConsider(lastTurn);
  const c2 = trimToBoard(c1, width, height);
  const c3 = c2
    .map(c => turnForCell(c, lastTurn))
    .filter(c => c.alive);
  const c4 = trimToBoard(c3, width, height);
  const c5 = sortCells(c4);
  return c5;
}
