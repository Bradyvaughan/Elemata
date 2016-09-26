import React from 'react'

class About extends React.Component {
  render() {
    return(
      <div id="ruc" class="modal hidden">
        <div>
          <p>
            Welcome to Elemata, the simple cellular automaton visualizer.
            This project explores elementary cellular automata.  In an elementary
            cellular automaton, there is a line of cells, each of which may be on
            or off, here represented by black or white.  Each generation of the automaton is calculated
            deterministically from the arrangement of the previous generation.
            That is, there is a transition function for each cell which maps the
            old state of the cell and each of its neighbors to a new state.
            Because there are 8 possible arrangements of three cells,
            (000, 100, 010, ..etc) and each of them may map to one of two states,
            there are 2^8 or 256 possible elementary transition rules for you to
            explore!
          </p>
          <p>
            You can use the step button to advance the the system by one generation
            at a time.  Use this function with the display on the right until you
            feel like you know what's going on.  Then, try
            designing your own rules.  What happens when you set the intial state
            to random with the 'random' button?  What about setting them 'all
            on'?  The possibilites are virtually endless!
          </p>
          <section>
            <button id="about-close">Okay, Thanks!</button>
          </section>
        </div>
      </div>
    )
  }
}

export default About
