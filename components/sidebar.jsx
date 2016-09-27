import React from 'react'

class Sidebar extends React.Component {

  componentDidMount() {
    window.showCustom = () => {
      $('#custom-rule').toggleClass('hidden')
    }

    window.arrangements = ['000', '100', '010', '001', '110', '101', '011', '111']

    window.ruleUpdate = () => {
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

    const ruleThirty = ['100', '011', '010','001'];
    const ruleNinety = ['100', '011', '110','001'];
    const ruleOneTen = ['001', '011', '110', '101', '010'];
    const ruleOneEightFour = ['111', '011', '101', '100'];

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

    $('#custom').on("click", showCustom)
    ruleUpdate();
  }


  render() {
    return(
      <section className='sidebar'>

        <div className="display">
          <section>
            <button id='custom' className='but-wid'>Custom Rule</button>
            <section className="drop-down">
              <button className='but-wid'>Select Rule</button>
              <ul className="menu">
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
            <p className="cell"></p>
            <p className="cell"></p>
            <p className="cell patch"></p>
            <i className="fa fa-arrow-right" aria-hidden="true"></i>
            <p className="cell patch" id="000"></p>
          </li>

          <li>
            <p className="cell black"></p>
            <p className="cell"></p>
            <p className="cell patch"></p>
            <i className="fa fa-arrow-right" aria-hidden="true"></i>
            <p className="cell patch" id="100"></p>
          </li>

          <li>
            <p className="cell"></p>
            <p className="cell black"></p>
            <p className="cell patch"></p>
            <i className="fa fa-arrow-right" aria-hidden="true"></i>
            <p className="cell patch" id="010"></p>
          </li>

          <li>
            <p className="cell"></p>
            <p className="cell"></p>
            <p className="cell black patch"></p>
            <i className="fa fa-arrow-right" aria-hidden="true"></i>
            <p className="cell patch" id="001"></p>
          </li>

          <li>
            <p className="cell black"></p>
            <p className="cell black"></p>
            <p className="cell patch"></p>
            <i className="fa fa-arrow-right" aria-hidden="true"></i>
            <p className="cell patch" id='110'></p>
          </li>

          <li>
            <p className="cell black"></p>
            <p className="cell"></p>
            <p className="cell black patch"></p>
            <i className="fa fa-arrow-right" aria-hidden="true"></i>
            <p className="cell patch" id='101'></p>
          </li>

          <li>
            <p className="cell"></p>
            <p className="cell black"></p>
            <p className="cell black patch"></p>
            <i className="fa fa-arrow-right" aria-hidden="true"></i>
            <p className="cell patch" id='011'></p>
          </li>

          <li>
            <p className="cell black"></p>
            <p className="cell black"></p>
            <p className="cell black patch"></p>
            <i className="fa fa-arrow-right" aria-hidden="true"></i>
            <p className="cell patch" id='111'></p>
          </li>
        </ul>
      </div>
      </section>
    )
  }
}

export default Sidebar
