import React from 'react'
import Cell from './Cell.jsx'

let style = {
  gridContainer: {
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
    const { cellData } = this.props

    return cellData.toJS().map((cell, i) => {
      return (
        <Cell
        color={cell.color}
        position={cell.position}
        key={i} />
      )
    })
  }

  render() {
    return (
      <div style={style.gridContainer}>
        <h2>Puzzle</h2>
        <div style={style.grid}>
          {this.getCells()}
        </div>
      </div>
    )
  }
}

export default Grid
