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
    $('#structions').toggleClass('hidden')
  }
  window.showCustom = () => {
    $('#custom-rule').toggleClass('hidden')
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

  const arrangements = ['000', '100', '010', '001', '110', '101', '011', '111']

  const ruleUpdate = () => {
    if (x instanceof Array) {
      arrangements.forEach((code) => {
        if (x.indexOf(code) > -1) {
          $(`#${code}`).addClass('black')
        } else {
          $(`#${code}`).removeClass('black')
        }
      })
    }
  }

  ruleUpdate();

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
    $('#counter').text('Current Generation: 0')
  })

  $('#instructions').on("click", showInstructions)
  $('#close').on("click", showInstructions)

  $('#custom').on("click", showCustom)

  $('#Rule90').on("click",()=>{
      window.x = ruleNinety
      $('#note').text('Current Rule: Rule 90')
      ruleUpdate();
  })
  $('#Rule30').on("click",()=>{
      window.x = ruleThirty
      $('#note').text('Current Rule: Rule 30')
      ruleUpdate();
  })
  $('#Rule110').on("click",()=>{
      window.x = ruleOneTen
      $('#note').text('Current Rule: Rule 110')
      ruleUpdate();
  })
  $('#Rule184').on("click",()=>{
      window.x = ruleOneEightFour
      $('#note').text('Current Rule: Rule 184')
      ruleUpdate();
  })

  let customArray = [];

  const customHandler = (code) => {
    return () => {
      $(`#custom-${code}`).toggleClass('black');
        let i = customArray.indexOf(code);
      if (i > -1) {
        customArray.splice(i,1);
      } else {
        customArray.push(code);
      }
    }
  }

  const clearCustom = () => {
    customArray = [];
    arrangements.forEach((code) => {
      $(`#custom-${code}`).removeClass('black')
    })
  }


  arrangements.forEach((code) => {
    $(`#custom-${code}`).on("click", customHandler(code))
  })

  $('#cancel').on("click", () => {
    showCustom();
    clearCustom();
  });

  $('#create-custom').on('click', () => {
    showCustom();
    window.x = customArray
    clearCustom();
    ruleUpdate();
  })
}
