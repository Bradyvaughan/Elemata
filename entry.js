import Cell from './cell';
import Row from './row';

window.Cell = Cell;
window.Row = Row;

window.init = () => {
  let start = new Array(51)
  start[26] = 1
  window.x = new Row(51, {'100': 1, '011': 1, '110': 1, '001': 1}, start);

  $('#start').on('click', () => {
    if (!x.int) {
      x.run(500);
    }
  })
  $('#stop').on('click', () => {
    x.stop();
  })
  $('#step').on('click', () => {
    x.step();
  })

  $('#reset').on("click", () => {
    alert('reset!');
  })

  $('#rule').on("click", () => {
    let start = new Array(51)
    start[26] = 1
    window.x = new Row(51, {'100': 1, '011': 1, '010': 1, '001': 1}, start);
    debugger;
  })
}
