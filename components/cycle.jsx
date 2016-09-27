import React from 'react'

class Cycle extends React.Component {

  componentDidMount() {
    $('#cycle-info').on('click', () => {
      $('#cycle-info-modal').toggleClass('hidden')
    })

    $('#cycle-close').on('click', () => {
      $("#cycle-modal").toggleClass('hidden')
    })
  }

  render() {
    return(
      <div id="cycle-modal" className="modal hidden">
        <div>
            <h1>You've Seen It All</h1>
          <p>The automaton has hit a cycle.
            If allowed to continue, it will repeat the same pattern forever.
            The system went through <span id='cycle-time'></span> generations before
            entering the cycle, and the cycle has a period of
            <span id='period'></span>.
          </p>
          <section>
            <span></span>
            <button id="cycle-close">Okay</button>
            <button id='cycle-info'>More Info</button>
            <span></span>
          </section>
        </div>
      </div>
    )
  }
}

export default Cycle
