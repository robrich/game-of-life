import getNeighborCount from "./neighborCount";
import getNextState from "./nextState";

export default function turnForCell(cell, allCells) {
  const neighborCount = getNeighborCount(cell.x, cell.y, allCells);
  const newAlive = getNextState(neighborCount, cell.alive);
  return {
    x: cell.x,
    y: cell.y,
    alive: newAlive
  };
}
