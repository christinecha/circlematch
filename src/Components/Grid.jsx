"use strict"

import React from 'react'
import Cell from './Cell.jsx'

class Grid extends React.Component {

  getCells() {
    const { cellData, cellColor, animation } = this.props
    let cellSize = (60) + 'px'
    let cellDataArray = cellData.split('')
    return cellDataArray.map((cell, i) => {
      return (
        <Cell
          opacity={(cell / 7) - (1/12)}
          cellColor={cellColor}
          cellSize={cellSize}
          position={cell}
          borderWidth='5px'
          key={i}
          animation={animation.toJS()[i]} />
      )
    })
  }

  render() {
    const { gridWidth, cellData, cellColor, animation } = this.props
    let gridSize = (gridWidth * 60) + 'px'
    let style = {
      gridContainer: {
        display: 'inline-block',
      },
      grid: {
        width: gridSize,
        height: gridSize,
        backgroundColor: '#eee',
        padding: '10px'
      }
    }

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
