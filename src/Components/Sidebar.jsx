import React from 'react'
import Cell from './Cell.jsx'

let style = {
  container: {
    marginLeft: '20px',
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
    marginBottom: '10px'
  },
  grid: {
    backgroundColor: '#eee',
    width: '100px',
    height: '100px',
    padding: '10px',
    margin: '5px 10px 10px 10px'
  }
}

class Grid extends React.Component {

  getCells() {
    const { winningCombo, cellColors } = this.props

    return winningCombo.toJS().map((cell, i) => {
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

export default Grid
