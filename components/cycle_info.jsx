import React from 'react'

class CycleInfo extends React.Component {

  componentDidMount() {
    $('#info-close').on('click', () => {
      $('#cycle-info-modal').toggleClass('hidden')
      $('#cycle-modal').toggleClass('hidden')
    })
  }
  render() {
    return(
      <div id='cycle-info-modal' className="hidden modal">
        <div>
          <h1>Cycles</h1>
          <p>
            Cellular automata are deterministic, which means that they have no
            random components: the same automaton will behave the same way no
            matter how many times it is run.  They are also memoryless, meaning
            that the behavior depends only on the current state, and not at all on
            how it got to that state.
          </p>
          <p>
            Together, these two properties mean that the future behavior of the
            automaton is completely determined by the current state.  Thus, if
            the current state of the automaton is the same as a state that it has
            held previously, the automaton will repeat the same
            actions, which will lead it back to that state again, to
            repeat those actions forever.
          </p>
          <p>
            Any automata in this system is guaranteed to cycle eventually: there
            are only about two quadrillion possible distinct rows, and so an
            automaton can only run for at most 2^51 generations before repeating
            a row, and any repeated row will lead to a cycle.
          </p>
          <p>
            The entire repeating behavior is highlighted in light gray, while the
            two matching lines are highlighted in slightly darker gray.  Every single
            other line is unique.
          </p>
          <section>
            <button id='info-close'>Cool</button>
          </section>
        </div>
      </div>
    )
  }
}


export default CycleInfo
