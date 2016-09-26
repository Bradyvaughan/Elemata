import React from 'react'

class Header extends React.Component {
  render() {
    return(
      <div class="header">

        <div class='logo-box'>
          <h1 class='logo'>Elemata</h1>
          <div>
            <button id='about'>About</button>
            <button id="instructions">Instructions</button>
          </div>
        </div>

        <div class='logo-box thing'>
          <div class="control">
            <div class="play">
              <button id="start"><i class="fa fa-play" aria-hidden="true"></i></button>
              <button id="stop" class='hidden'><i class="fa fa-pause" aria-hidden="true"></i></button>
              <button id="step">Step</button>
              <button id="reset">Reset</button>
            </div>
            <div>
              <span>Speed:</span>
              <input id='slider' min='1' max='50' step='1' value='25' type="range"/>
            </div>
          </div>
          <div class='control'>
            <div>
              <button id='all-black'>All On</button>
              <button id='random'>Random</button>
            </div>
            <p id="counter">Generation: 0</p>
          </div>

        </div>
      </div>
    )
  }
}

export default Header
