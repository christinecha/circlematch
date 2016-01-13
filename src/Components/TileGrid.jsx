"use strict"

import React from 'react'
// import Tile from './Tile.jsx'

let style = {
  gridContainer: {
    position: 'absolute',
    zIndex: '999'
  },
  grid: {
    width: '200px',
    height: '200px',
    padding: '10px'
  }
}

class TileGrid extends React.Component {

  getTiles() {
    const { cellData, cellColors, animation } = this.props

    return cellColors.toJS().map((color, i) => {
      return (
        <Tile
        color={color}
        key={i}
        index={i}
        animation={animation.toJS()[i]} />
      )
    })
  }

  render() {
    return (
      <div style={style.gridContainer}>
        <div style={style.grid}>
          {this.getTiles()}
        </div>
      </div>
    )
  }
}

export default TileGrid
