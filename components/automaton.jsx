import React from 'react'


class Automaton extends React.Component {


  render() {
    let trueGrid = [];
    for (let i = 0; i < grid.length; i++) {
      trueGrid[i] = grid[i]
    }
    console.log(grid);
    return(
      <ul className="grid">
        {trueGrid}
      </ul>
    )
  }
}

export default Automaton
