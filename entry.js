import Cell from './cell';
import Row from './row';

window.Cell = Cell;
window.Row = Row;

window.init = () => {
  const ruleThirty = {'100': 1, '011': 1, '010': 1, '001': 1}
  const ruleNinety = {'100': 1, '011': 1, '110': 1, '001': 1}
  let start = new Array(51)
  start[26] = 1
  window.x = new Row(51, ruleNinety, start);

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
    if (x.auto[0].rule === ruleThirty) {
      let start = new Array(51)
      start[26] = 1
      window.x = new Row(51, ruleNinety, start);
    } else {
      let start = new Array(51)
      start[26] = 1
      window.x = new Row(51, ruleThirty, start);
    }
  })
}
