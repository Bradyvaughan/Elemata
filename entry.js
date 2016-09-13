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

  window.showInstructions = () => {
    $('#overlay').toggleClass('hidden')
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
    x.stop();
    let rule = x.auto[0].rule
    $('.grid').empty();
    start = [];
    $('.grid').append(initialRow());
    window.x = rule;
  })

  $('#instructions').on("click", showInstructions)
  $('#close').on("click", showInstructions)

  $('#Rule90').on("click",()=>{
      window.x = ruleNinety
      $('#note').text('Current Rule: Rule 90')
  })
  $('#Rule30').on("click",()=>{
      window.x = ruleThirty
      $('#note').text('Current Rule: Rule 30')
  })
  $('#Rule110').on("click",()=>{
      window.x = ruleOneTen
      $('#note').text('Current Rule: Rule 110')
  })
  $('#Rule184').on("click",()=>{
      window.x = ruleOneEightFour
      $('#note').text('Current Rule: Rule 184')
  })
}
