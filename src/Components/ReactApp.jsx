"use strict"

import React from 'react'
import {connect} from 'react-redux'
import * as action from '../actions.js'
import Grid from './Grid.jsx'
import Sidebar from './Sidebar.jsx'

export class ReactApp extends React.Component {

  componentDidMount() {
    window.addEventListener('keydown', (e) => {
      const { dispatch, cellData, winningCombo, winner, level } = this.props
      dispatch(action.MOVE_CELLS(cellData.toJS(), e.keyCode, winningCombo.toJS()))
    })
  }

  componentDidUpdate() {
    const { dispatch, winner, level } = this.props
    if (winner == true) {
      dispatch(action.SET_LEVEL(level + 1))
    }
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', (e) => {
      const { dispatch, cellData, winningCombo, winner, level } = this.props
      dispatch(action.MOVE_CELLS(cellData.toJS(), e.keyCode, winningCombo.toJS()))
    })
  }

  displayWinner() {
    let winner = this.props.winner
    if (winner == true) {
      return 'You\'re a winner!'
    } else {
      return 'Keep going...'
    }
  }

  render() {
    let style = {
      winnerDisplay: {
        backgroundColor: '#eee',
        width: '100%',
        marginTop: '20px',
        padding: '20px 0'
      }
    }
    
    return (
      <div>
        <h2>circlematch</h2>
        <p>use your arrow keys to move</p>
        <br />
        <Grid
          width={this.props.gridWidth}
          cellData={this.props.cellData}
          cellColors={this.props.cellColors} />
        <Sidebar
          width={this.props.gridWidth}
          cellColors={this.props.cellColors}
          level={this.props.level}
          winningCombo={this.props.winningCombo} />
        <h2 style={style.winnerDisplay}>
          {this.displayWinner()}
        </h2>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    gridWidth: state.get('gridWidth'),
    cellData: state.get('cellData'),
    cellColors: state.get('cellColors'),
    level: state.get('level'),
    winningCombo: state.get('winningCombo'),
    winner: state.get('winner')
  }
}

export const AppContainer = connect(mapStateToProps)(ReactApp);
