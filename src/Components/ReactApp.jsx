"use strict"

import React from 'react'
import {connect} from 'react-redux'
import * as action from '../actions.js'
import Grid from './Grid.jsx'
import WinningGrid from './WinningGrid.jsx'

export class ReactApp extends React.Component {

  componentDidMount() {
    window.addEventListener('keydown', (e) => {
      const { dispatch, cellData, winningCombo } = this.props
      dispatch(action.MOVE_CELLS(cellData.toJS(), e.keyCode, winningCombo.toJS()))
    })
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', (e) => {
      const { dispatch, cellData, winningCombo } = this.props
      dispatch(action.MOVE_CELLS(cellData.toJS(), e.keyCode, winningCombo.toJS()))
    })
  }

  displayWinningGrid() {
    return (
      <WinningGrid
        width={this.props.gridWidth}
        winningCombo={this.props.winningCombo} />
    )
  }

  displayWinner() {
    let winner = this.props.winner
    if (winner == true) {
      return (<h2>You're a winner!</h2>)
    } else {
      return (<h2>Keep going</h2>)
    }
  }

  render() {
    return (
      <div>
        <Grid
          width={this.props.gridWidth}
          cellData={this.props.cellData}
          winningCombo={this.props.winningCombo} />
        {this.displayWinningGrid()}
        {this.displayWinner()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    gridWidth: state.get('gridWidth'),
    cellData: state.get('cellData'),
    winningCombo: state.get('winningCombo'),
    winner: state.get('winner')
  }
}

export const AppContainer = connect(mapStateToProps)(ReactApp);
