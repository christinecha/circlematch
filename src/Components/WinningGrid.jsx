import React from 'react'
import Cell from './Cell.jsx'

let style = {
  gridContainer: {
    marginLeft: '20px',
    display: 'inline-block',
  },
  grid: {
    width: '180px',
    height: '180px',
    backgroundColor: 'black',
  }
}

class Grid extends React.Component {

  getCells() {
    const { winningCombo } = this.props

    return winningCombo.toJS().map((cell, i) => {
      return (
        <Cell
        position={cell}
        key={i} />
      )
    })
  }

  render() {
    return (
      <div style={style.gridContainer}>
        <h2>Winning Combo</h2>
        <div style={style.grid}>
          {this.getCells()}
        </div>
      </div>
    )
  }
}

export default Grid
