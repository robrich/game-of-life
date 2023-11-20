// Filter to only cells that fit on the board (base 0)
// array.trimToBoard(3,5) yields cells that fit from x:0-2,y:0-4
export default function trimToBoard(cells, width, height) {
  return cells.filter(c => 
    c.x >= 0 && c.x < width 
    && c.y >= 0 && c.y < height);
}
