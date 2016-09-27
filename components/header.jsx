import React from 'react'
import Row from '../row';
import Cell from '../cell';
import Automaton from './automaton'

class Header extends React.Component {

  componentDidMount() {
    window.grid = [];
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
    grid.push(initialRow())

    $('#about').on('click', () => {
      $("#ruc").toggleClass('hidden')
    })

    $('#all-black').on('click', () => {
      if (x instanceof Array) {
        for (let i = 0; i < 51; i++) {
          $(`#${i}`).addClass('black')
          $(`#${i}`).css('background-color',`#${colors[23]}`)
          start[i] = 1;
        }
      }
    })

    $('#slider').on('change', () => {
      if (x.int) {
        x.stop();
        x.run(1000 / $('#slider').val());
      }
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
      grid = [];
      start = [];
      grid.push(initialRow());
      window.x = rule;
      $('#counter').text('Generation: 0')
    })

    window.x = ['100', '011', '110','001'];

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
  }

  render() {
    return(
      <div>
        <div className="header">

          <div className='logo-box'>
            <h1 className='logo'>Elemata</h1>
            <div>
              <button id='about'>About</button>
              <button id="instructions">Instructions</button>
            </div>
          </div>

          <div className='logo-box thing'>
            <div className="control">
              <div className="play">
                <button id="start"><i className="fa fa-play" aria-hidden="true"></i></button>
                <button id="stop" className='hidden'><i className="fa fa-pause" aria-hidden="true"></i></button>
                <button id="step">Step</button>
                <button id="reset">Reset</button>
              </div>
              <div>
                <span>Speed:</span>
                <input id='slider' min='1' max='50' step='1' value='25' type="range"/>
              </div>
            </div>
            <div className='control'>
              <div>
                <button id='all-black'>All On</button>
                <button id='random'>Random</button>
              </div>
              <p id="counter">Generation: 0</p>
            </div>

          </div>
        </div>

        <div className="body">
          <h1>Click Several Squares and Then Hit Play</h1>
          <h1>Center Here</h1>
          <h1><i className="fa fa-arrow-down" aria-hidden="true"></i></h1>
          <Automaton/>
        </div>
      </div>
    )
  }
}

export default Header
