import React from 'react'

class Instructions extends React.Component {
  render() {
    return(
      <div id="structions" class="modal">
        <div>
          <p>
            Click on the squares in the top row to set the initial state of the
            automaton.  By default, the system is set to use rule 90, but you can
            change its behavior by selecting other rules from the 'select rule'
            drop-down, or creating your own in a custom rule menu.  Once a rule
            and initial state are selected, press play to watch the automaton run.
            You can adjust the speed with the speed slider and make things colorful
            with rainbow mode.  Go nuts!
          </p>
          <section>
            <button id='close'>Okay</button>
          </section>
        </div>
      </div>  
    )
  }
}

export default Instructions
