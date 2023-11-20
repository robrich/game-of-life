// Get the number of alive neighbors for each cell
export default function getNeighborCount(x, y, allCells) {
  const neighbors = allCells.filter(c =>
    c.alive
    && c.x >= x-1 && c.x <= x+1
    && c.y >= y-1 && c.y <= y+1
    && !(c.x === x && c.y === y) );
  return neighbors.length;
}
