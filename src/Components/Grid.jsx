import React from 'react'
import Cell from './Cell.jsx'

let style = {
  gridContainer: {
    display: 'inline-block',
  },
  grid: {
    width: '200px',
    height: '200px',
    backgroundColor: '#eee',
    padding: '10px'
  }
}

class Grid extends React.Component {

  getCells() {
    const { cellData, cellColors } = this.props

    return cellData.toJS().map((cell, i) => {
      return (
        <Cell
        color={cellColors.toJS()[cell]}
        position={cell}
        key={i} />
      )
    })
  }

  render() {
    return (
      <div style={style.gridContainer}>
        <div style={style.grid}>
          {this.getCells()}
        </div>
      </div>
    )
  }
}

export default Grid
