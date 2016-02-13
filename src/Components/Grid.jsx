"use strict"

import React from 'react'
import Cell from './Cell.jsx'

class Grid extends React.Component {

  getCells() {
    const { animations, cellData, colorScheme } = this.props
    let cellSize = 80
    let cellDataArray = cellData.split('')

    return cellDataArray.map((cell, i) => {

      let cellAnimation = ''
      let opacity = cell / 8

      return (
        <Cell
          animation={animations.toJS()[i]}
          opacity={opacity}
          color={colorScheme.toJS().cell}
          cellSize={cellSize}
          position={cell}
          borderWidth={5}
          index={i}
          key={i} />
      )
    })
  }

  render() {
    const { gridWidth, cellData, colorScheme, animation, onCellResponderGrant, onCellResponderRelease } = this.props
    return (
      <div style={styles.container}>
        <div style={styles.grid}>
          {this.getCells()}
        </div>
      </div>
    )
  }
}

let styles = {
  container: {
    width: '100%'
  },
  grid: {
    width: '290px',
    height: '290px',
    padding: '10px',
    margin: '0 auto'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
}

export default Grid
