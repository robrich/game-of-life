// given a list of all previous alive cells
// get the list of cells we should calculate
// including all the neighbors of all the active cells
// cells may go off the board
export default function cellsToConsider(lastCells) {
  let results = [];
  // the 8 adjoining squares
  [-1,0,1].forEach(x => {
    [-1,0,1].forEach(y => {
      lastCells.forEach(c => {
        results.push(`${c.x + x}x${c.y + y}`);
      });
    });
  });
  // distinct
  results = [...new Set(results)];
  // back into squares
  results = results.map(r => {
    const pieces = r.split('x');
    return {
      x: parseInt(pieces[0]),
      y: parseInt(pieces[1])
    };
  });
  // alive or dead
  results.forEach(r => {
    r.alive = lastCells.filter(l => l.x === r.x && l.y === r.y)[0]?.alive ?? false;
  });
  return results;
}
