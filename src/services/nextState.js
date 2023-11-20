// Given the count of neighbors and if it was alive,
// return if it will be alive next time
export default function getNextState(aliveNeighbors, wasAlive) {
  if (!wasAlive) {
    // Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction
    if (aliveNeighbors === 3) {
      return true;
    }
    return false; // stays dead
  }
  // Any live cell with fewer than two live neighbours dies, as if by underpopulation.
  if (aliveNeighbors < 2) {
    return false;
  }
  // Any live cell with more than three live neighbours dies, as if by overpopulation.
  if (aliveNeighbors > 3) {
    return false;
  }
  // Any live cell with two or three live neighbours lives on to the next generation.
  return true;
}
