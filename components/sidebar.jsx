import React from 'react'

class Sidebar extends React.Component {
  render() {
    return(
      <section class='sidebar'>

        <div class="display">
          <section>
            <button id='custom' class='but-wid'>Custom Rule</button>
            <section class="drop-down">
              <button class='but-wid'>Select Rule</button>
              <ul class="menu">
                <li id="Rule30">Rule 30</li>
                <li id="Rule90">Rule 90</li>
                <li id="Rule110">Rule 110</li>
                <li id="Rule184">Rule 184</li>
              </ul>
            </section>
          </section>

        <ul>
          <li>Current Rule:</li>
          <li>
            <p class="cell"></p>
            <p class="cell"></p>
            <p class="cell patch"></p>
            <i class="fa fa-arrow-right" aria-hidden="true"></i>
            <p class="cell patch" id="000"></p>
          </li>

          <li>
            <p class="cell black"></p>
            <p class="cell"></p>
            <p class="cell patch"></p>
            <i class="fa fa-arrow-right" aria-hidden="true"></i>
            <p class="cell patch" id="100"></p>
          </li>

          <li>
            <p class="cell"></p>
            <p class="cell black"></p>
            <p class="cell patch"></p>
            <i class="fa fa-arrow-right" aria-hidden="true"></i>
            <p class="cell patch" id="010"></p>
          </li>

          <li>
            <p class="cell"></p>
            <p class="cell"></p>
            <p class="cell black patch"></p>
            <i class="fa fa-arrow-right" aria-hidden="true"></i>
            <p class="cell patch" id="001"></p>
          </li>

          <li>
            <p class="cell black"></p>
            <p class="cell black"></p>
            <p class="cell patch"></p>
            <i class="fa fa-arrow-right" aria-hidden="true"></i>
            <p class="cell patch" id='110'></p>
          </li>

          <li>
            <p class="cell black"></p>
            <p class="cell"></p>
            <p class="cell black patch"></p>
            <i class="fa fa-arrow-right" aria-hidden="true"></i>
            <p class="cell patch" id='101'></p>
          </li>

          <li>
            <p class="cell"></p>
            <p class="cell black"></p>
            <p class="cell black patch"></p>
            <i class="fa fa-arrow-right" aria-hidden="true"></i>
            <p class="cell patch" id='011'></p>
          </li>

          <li>
            <p class="cell black"></p>
            <p class="cell black"></p>
            <p class="cell black patch"></p>
            <i class="fa fa-arrow-right" aria-hidden="true"></i>
            <p class="cell patch" id='111'></p>
          </li>
        </ul>
      </div>
      </section>
    )
  }
}

export default Sidebar
