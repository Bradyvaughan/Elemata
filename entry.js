import Cell from './cell';
import Row from './row';


window.init = function init() {
  let start = new Array(91)
  start[46] = 1
  let x = new Row(91, {'100': 1, '011': 1, '110': 1, '001': 1}, start);

  x.run(100);

  setTimeout(x.stop.bind(x), 100000)
};

window.Cell = Cell;
window.Row = Row;
