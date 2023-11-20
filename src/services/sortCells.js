// sort cells by x then by y
export default function sortCells(cells) {
  let results = [...cells]; // avoid mutating input
  results.sort((a, b) => a.x - b.x || a.y - b.y);
  // because equal is 0, `||` then does the other sort
  return results;
}
