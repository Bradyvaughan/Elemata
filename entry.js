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
      let cell = $(`#${pos}`);
      cell.toggleClass('black')

      if (cell.hasClass('black')) {
        cell.css('background-color',`#${colors[23]}`)
      } else {
        cell.css('background-color','')
      }
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
      cell.addClass("cursor")
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

  $('#slider').on('change', () => {
    if (x.int) {
      x.stop();
      x.run(1000 / $('#slider').val());
    }
  })

  $('#start').on('click', () => {
    if (x instanceof Array) {
      window.x = new Row(51, x, start);
    }

    if (!x.int) {
      x.run(1000 / $('#slider').val());
    }
    for (let i = 0; i < 51; i++) {
      $(`#${i}`).unbind()
      $(`#${i}`).removeClass('cursor')
    }

    $('#stop').toggleClass('hidden')
    $('#start').toggleClass('hidden')
  })
  $('#stop').on('click', () => {
    if (x.int) {
      x.stop();
    }
    $('#stop').toggleClass('hidden')
    $('#start').toggleClass('hidden')
  })
  $('#step').on('click', () => {
    if (x instanceof Array) {
      window.x = new Row(51, x, start)
    }
    x.step();
    for (let i = 0; i < 51; i++) {
      $(`#${i}`).unbind()
    }
  })

  $('#reset').on("click", () => {
    let rule;
    if (x.int) {
      $('#stop').toggleClass('hidden')
      $('#start').toggleClass('hidden')
    }

    if (!(x instanceof Array)) {
      x.stop();
      rule = x.auto[0].rule;
    } else {
      rule = x;
    }
    $('.grid').empty();
    start = [];
    $('.grid').append(initialRow());
    window.x = rule;
    $('#counter').text('Generation: 0')
  })

  $('#instructions').on("click", showInstructions)
  $('#close').on("click", showInstructions)

  $('#custom').on("click", showCustom)

  $('#Rule90').on("click",()=>{
      window.x = ruleNinety
      ruleUpdate();
  })
  $('#Rule30').on("click",()=>{
      window.x = ruleThirty
      ruleUpdate();
  })
  $('#Rule110').on("click",()=>{
      window.x = ruleOneTen
      ruleUpdate();
  })
  $('#Rule184').on("click",()=>{
      window.x = ruleOneEightFour
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

  $('#random').on('click', () => {
    if (x instanceof Array) {
      for (let i = 0; i < 51; i++) {
        if (Math.random() > 0.5) {
          startToggle(i)()
        }
      }
    }

  })

  $('#all-black').on('click', () => {
    if (x instanceof Array) {
      for (let i = 0; i < 51; i++) {
        $(`#${i}`).addClass('black')
        $(`#${i}`).css('background-color',`#${colors[11]}`)
        start[i] = 1;
      }
    }
  })

  $('#cycle-close').on('click', () => {
    $("#cycle-modal").toggleClass('hidden')
  })

  $('#cycle-info').on('click', () => {
    $('#cycle-info-modal').toggleClass('hidden')
  })

  $('#info-close').on('click', () => {
    $('#cycle-info-modal').toggleClass('hidden')
    $('#cycle-modal').toggleClass('hidden')
  })

  $('#about').on('click', () => {
    $("#ruc").toggleClass('hidden')
  })
  $('#about-close').on('click', () => {
    $("#ruc").toggleClass('hidden')
  })


  window.colors = [];

  $('#rainbow').on('click', () => {
    if (colors[0]) {
      window.colors = [];
      $('#rainbow').text('Rainbow Mode')
      $('.header').css('background-image','url(images/circuits.jpg)')
      $('button').css('background-color','#cff')
    } else {
      window.colors = ['f00', 'f40', 'f80', 'fc0', 'ff0', 'cf0', '8f0', '4f0',
        '0f0', '0f4', '0f8', '0fc', '0ff', '0cf', '08f', '04f', '00f', '40f',
        '80f', 'c0f', 'f0f', 'f0c', 'f08', 'f04']
      $('#rainbow').text('Monochrome')
      $('.header').css('background-image','url(images/rainbow_circuits.jpg)')
      $('button').css('background-color','#ccc')
    }
  })
}
