import Cell from './cell';
import Row from './row';

window.Cell = Cell;
window.Row = Row;

window.init = () => {
  const ruleThirty = ['100', '011', '010','001'];
  const ruleNinety = ['100', '011', '110','001'];
  const ruleOneTen = ['001', '011', '110', '101', '010'];
  const ruleOneEightFour = ['111', '011', '101', '100'];

  let start = [];

  const startToggle = (pos) => {
    return () => {
      $(`#${pos}`).toggleClass('black')
      if (start[pos]) {
        start[pos] = 0;
      } else {
        start[pos] = 1;
      }
    }
  }

  const initialRow = () => {
    let row = $("<ul>");
    row.addClass("row");
    for (let i = 0; i < 51; i++) {
      let cell = $("<li>");
      cell.addClass("cell");
      cell.attr('id',`${i}`);
      cell.on('click', startToggle(i));
      row.append(cell);
    }
    return row;
  }
  $(".grid").append(initialRow())

  window.x = ruleNinety;

  $('#start').on('click', () => {
    if (x instanceof Array) {
      window.x = new Row(51, x, start);
    }

    if (!x.int) {
      x.run(50);
    }
  })
  $('#stop').on('click', () => {
    x.stop();
  })
  $('#step').on('click', () => {
    x.step();
  })

  $('#reset').on("click", () => {
    let rule = x.auto[0].rule
    $('.grid').empty();
    start = [];
    $('.grid').append(initialRow());
    window.x = rule;
  })

  $('#rule').on("click", () => {

    if (x instanceof Array) {
      switch (x) {
        case ruleThirty:
          window.x = new Row(51, ruleNinety, start);
          $('#note').text('Current Rule: Rule90')
          break;
        case ruleNinety:
          window.x = new Row(51, ruleOneTen, start);
          $('#note').text('Current Rule: Rule110')
          break;
        case ruleOneTen:
          window.x = new Row(51, ruleOneEightFour, start);
          $('#note').text('Current Rule: Rule184')
          break;
        case ruleOneEightFour:
          window.x = new Row(51, ruleThirty, start);
          $('#note').text('Current Rule: Rule30')
          break;
        default:
          console.log("error!");
      }
    } else {
      switch (x.auto[0].rule) {
        case ruleThirty:
          window.x = new Row(51, ruleNinety, start);
          $('#note').text('Current Rule: Rule90')
          break;
        case ruleNinety:
          window.x = new Row(51, ruleOneTen, start);
          $('#note').text('Current Rule: Rule110')
          break;
        case ruleOneTen:
          window.x = new Row(51, ruleOneEightFour, start);
          $('#note').text('Current Rule: Rule184')
          break;
        case ruleOneEightFour:
          window.x = new Row(51, ruleThirty, start);
          $('#note').text('Current Rule: Rule30')
          break;
        default:
          console.log("error!");
    }
  })
}
