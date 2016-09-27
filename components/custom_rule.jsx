import React from 'react'

class CustomRule extends React.Component {

  componentDidMount() {
    window.showCustom = () => {
      $('#custom-rule').toggleClass('hidden')
    }

    const clearCustom = () => {
      customArray = [];
      arrangements.forEach((code) => {
        $(`#custom-${code}`).removeClass('black')
      })
    }

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

    arrangements.forEach((code) => {
      $(`#custom-${code}`).on("click", customHandler(code))
    })

    $('#create-custom').on('click', () => {
      showCustom();
      window.x = customArray
      clearCustom();
      ruleUpdate();
    })

    $('#cancel').on("click", () => {
      showCustom();
      clearCustom();
    });
  }


  render() {
    return(
      <div id='custom-rule' className='modal hidden'>
        <div>

          <p>
            Select which configurations you would like to map to 'on' states by
            toggling the lower squares
          </p>

          <section className='custom-body'>

            <li>
              <section className="cell-row">
                <p className="cell"></p>
                <p className="cell"></p>
                <p className="cell patch"></p>
              </section>
              <i className="fa fa-arrow-down" aria-hidden="true"></i>
              <p className="cell patch spec" id="custom-000"></p>
            </li>

            <li>
              <section className="cell-row">
                <p className="cell black"></p>
                <p className="cell"></p>
                <p className="cell patch"></p>
              </section>
              <i className="fa fa-arrow-down" aria-hidden="true"></i>
              <p className="cell patch spec" id="custom-100"></p>
            </li>

            <li>
              <section className="cell-row">
                <p className="cell"></p>
                <p className="cell black"></p>
                <p className="cell patch"></p>
              </section>
              <i className="fa fa-arrow-down" aria-hidden="true"></i>
              <p className="cell patch spec" id="custom-010"></p>
            </li>

            <li>
              <section className="cell-row">
                <p className="cell"></p>
                <p className="cell"></p>
                <p className="cell black patch"></p>
              </section>
              <i className="fa fa-arrow-down" aria-hidden="true"></i>
              <p className="cell patch spec" id="custom-001"></p>
            </li>

            <li>
              <section className="cell-row">
                <p className="cell black"></p>
                <p className="cell black"></p>
                <p className="cell patch"></p>
              </section>
              <i className="fa fa-arrow-down" aria-hidden="true"></i>
              <p className="cell patch spec" id="custom-110"></p>
            </li>

            <li>
              <section className="cell-row">
                <p className="cell black"></p>
                <p className="cell"></p>
                <p className="cell black patch"></p>
              </section>
              <i className="fa fa-arrow-down" aria-hidden="true"></i>
              <p className="cell patch spec" id="custom-101"></p>
            </li>

            <li>
              <section className="cell-row">
                <p className="cell"></p>
                <p className="cell black"></p>
                <p className="cell black patch"></p>
              </section>
              <i className="fa fa-arrow-down" aria-hidden="true"></i>
              <p className="cell patch spec" id="custom-011"></p>
            </li>

            <li>
              <section className="cell-row">
                <p className="cell black"></p>
                <p className="cell black"></p>
                <p className="cell black patch"></p>
              </section>
              <i className="fa fa-arrow-down" aria-hidden="true"></i>
              <p className="cell patch spec" id="custom-111"></p>
            </li>

          </section>
          <ul className='controls'>
            <button id='create-custom'>Create Automaton</button>
            <button id="cancel">Cancel</button>
          </ul>
        </div>
      </div>
    )
  }
}

export default CustomRule
