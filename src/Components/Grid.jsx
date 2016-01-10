import React from 'react'
import { connect } from 'react-redux'
import * as action from '../actions.js'
import Cell from './Cell.jsx'

let style = {
  grid: {
    width: '180px',
    height: '180px',
    backgroundColor: 'black',
  }
}

export class Grid extends React.Component {

  componentDidMount() {
    window.addEventListener('keydown', (e) => {
      const { dispatch, cellData } = this.props
      dispatch(action.MOVE_CELLS(cellData.toJS(), e.keyCode))
    })
  }

  componentWillUnmount() {
   window.removeEventListener('keydown', this.handleKeyDown)
  }

  getCells() {
    const { dispatch, cellData } = this.props

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
      <div style={style.grid}>
        {this.getCells()}
      </div>
    )
  }
}

export default connect()(Grid)
