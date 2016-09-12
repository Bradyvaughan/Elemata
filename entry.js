import Cell from './cell';
import Row from './row';

window.Cell = Cell;
window.Row = Row;

window.init = () => {
  const ruleThirty = {'100': 1, '011': 1, '010': 1, '001': 1}
  const ruleNinety = {'100': 1, '011': 1, '110': 1, '001': 1}
  const ruleOneTen = {'001': 1, '011': 1, '110': 1, '101': 1, '010': 1}
  const ruleOneEightFour = {'111': 1, '011': 1, '101': 1, '100': 1}
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
    $('.grid').empty();
  })

  $('#rule').on("click", () => {
    if (x.auto[0].rule === ruleThirty) {
      let start = new Array(51)
      start[26] = 1
      window.x = new Row(51, ruleNinety, start);
      $('#note').text('Current Rule: Rule90')
    } else if (x.auto[0].rule === ruleNinety) {
      let start = new Array(51)
      start[50] = 1
      window.x = new Row(51, ruleOneTen, start);
      $('#note').text('Current Rule: Rule110')
    } else if (x.auto[0].rule === ruleOneTen) {
      let star = [];
      for (let i = 0; i < 51; i++) {
        if (Math.random() > .5) {
          star.push(1);
        } else {
          star.push(0);
        }
      }
      window.x = new Row(51, ruleOneEightFour, star);
      $('#note').text('Current Rule: Rule184')
    } else {
      let start = new Array(51)
      start[26] = 1
      window.x = new Row(51, ruleThirty, start);
      $('#note').text('Current Rule: Rule30')
    }
  })
}
