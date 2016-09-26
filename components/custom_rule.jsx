import React from 'react'

class CustomRule extends React.Component {
  render() {
    return(
      <div id='custom-rule' class='modal hidden'>
        <div>

          <p>
            Select which configurations you would like to map to 'on' states by
            toggling the lower squares
          </p>

          <section class='custom-body'>

            <li>
              <section class="cell-row">
                <p class="cell"></p>
                <p class="cell"></p>
                <p class="cell patch"></p>
              </section>
              <i class="fa fa-arrow-down" aria-hidden="true"></i>
              <p class="cell patch spec" id="custom-000"></p>
            </li>

            <li>
              <section class="cell-row">
                <p class="cell black"></p>
                <p class="cell"></p>
                <p class="cell patch"></p>
              </section>
              <i class="fa fa-arrow-down" aria-hidden="true"></i>
              <p class="cell patch spec" id="custom-100"></p>
            </li>

            <li>
              <section class="cell-row">
                <p class="cell"></p>
                <p class="cell black"></p>
                <p class="cell patch"></p>
              </section>
              <i class="fa fa-arrow-down" aria-hidden="true"></i>
              <p class="cell patch spec" id="custom-010"></p>
            </li>

            <li>
              <section class="cell-row">
                <p class="cell"></p>
                <p class="cell"></p>
                <p class="cell black patch"></p>
              </section>
              <i class="fa fa-arrow-down" aria-hidden="true"></i>
              <p class="cell patch spec" id="custom-001"></p>
            </li>

            <li>
              <section class="cell-row">
                <p class="cell black"></p>
                <p class="cell black"></p>
                <p class="cell patch"></p>
              </section>
              <i class="fa fa-arrow-down" aria-hidden="true"></i>
              <p class="cell patch spec" id="custom-110"></p>
            </li>

            <li>
              <section class="cell-row">
                <p class="cell black"></p>
                <p class="cell"></p>
                <p class="cell black patch"></p>
              </section>
              <i class="fa fa-arrow-down" aria-hidden="true"></i>
              <p class="cell patch spec" id="custom-101"></p>
            </li>

            <li>
              <section class="cell-row">
                <p class="cell"></p>
                <p class="cell black"></p>
                <p class="cell black patch"></p>
              </section>
              <i class="fa fa-arrow-down" aria-hidden="true"></i>
              <p class="cell patch spec" id="custom-011"></p>
            </li>

            <li>
              <section class="cell-row">
                <p class="cell black"></p>
                <p class="cell black"></p>
                <p class="cell black patch"></p>
              </section>
              <i class="fa fa-arrow-down" aria-hidden="true"></i>
              <p class="cell patch spec" id="custom-111"></p>
            </li>

          </section>
          <ul class='controls'>
            <button id='create-custom'>Create Automaton</button>
            <button id="cancel">Cancel</button>
          </ul>
        </div>
      </div>  
    )
  }
}

export default CustomRule
