export default function buildRandomBoard(width, height, maxPieces) {

  const pieces = getRandomInt(maxPieces);

  const cells = [];

  let proceed = true;
  // TODO: set-based
  while (proceed) {
    const cell = {
      x: getRandomInt(width),
      y: getRandomInt(height),
      alive: true
    };
    if (cells.filter(c => c.x === cell.x && c.y === cell.y).length === 0) {
      cells.push(cell);
    }
    proceed = (cells.length < pieces);
  }

  console.log(cells);
  return cells;
}

export function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

