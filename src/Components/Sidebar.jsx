import React from 'react'
import Cell from './Cell.jsx'

class Sidebar extends React.Component {

  getCells() {
    const { gridWidth, winningCombo, cellColors } = this.props
    let cellSize = (20) + 'px'
    return winningCombo.toJS().map((cell, i) => {
      return (
        <Cell
          cellSize={cellSize}
          color={cellColors.toJS()[cell]}
          position={cell}
          borderWidth='2px'
          key={i} />
      )
    })
  }

  render() {
    const { gridWidth, cellData, cellColors, animation } = this.props
    let gridSize = (gridWidth * 20) + 'px'
    let style = {
      container: {
        marginLeft: '20px',
        width: '140px',
        display: 'inline-block',
        border: '2px solid #eee',
      },
      level: {
        backgroundColor: '#eee',
        padding: '5px 0',
        marginBottom: '10px'
      },
      solveButton: {
        backgroundColor: '#eee',
        padding: '5px 10px',
        width: '120px',
        border: 'none',
        margin: '10px 0'
      },
      grid: {
        backgroundColor: '#eee',
        width: gridSize,
        height: gridSize,
        padding: '10px',
        margin: '5px auto'
      }
    }
    return (
      <div style={style.container}>
        <div style={style.level}>
          <h2>LEVEL {this.props.level}</h2>
        </div>
        <h4>YOUR GOAL</h4>
        <div style={style.grid}>
          {this.getCells()}
        </div>
        <button
          style={style.solveButton}
          onClick={this.props.onSolveButtonClick}>
          <h3>SOLVE</h3>
        </button>
      </div>
    )
  }
}

export default Sidebar
