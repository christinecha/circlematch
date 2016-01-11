"use strict"

import React from 'react'
import {connect} from 'react-redux'
import Modal from 'react-modal'
import Grid from './Grid.jsx'
import Sidebar from './Sidebar.jsx'
import _NextLevel from './_NextLevel.jsx'
import * as style from '../style.js'
import * as action from '../actions.js'

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

  closeModal() {
    const { dispatch } = this.props
    dispatch(action.CLOSE_MODAL())
  }

  render() {
    const {
      gridWidth,
      cellData,
      cellColors,
      level,
      winningCombo,
      winner,
      modalIsOpen
    } = this.props
    return (
      <div>
        <h2>circlematch</h2>
        <p>use your arrow keys to move</p>
        <br />
        <Modal isOpen={modalIsOpen} style={style.modal}>
          <_NextLevel level={level} closeModal={() => this.closeModal()}/>
        </Modal>
        <Grid
          width={gridWidth}
          cellData={cellData}
          cellColors={cellColors} />
        <Sidebar
          width={gridWidth}
          cellColors={cellColors}
          level={level}
          winningCombo={winningCombo} />
        <h2 style={style.winnerDisplay}>
          {this.displayWinner()}
        </h2>
        <br />
        <p>NOTE \\ Only works on desktop. Mobile coming soon!</p>
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
    winner: state.get('winner'),
    modalIsOpen: state.get('modalIsOpen')
  }
}

export const AppContainer = connect(mapStateToProps)(ReactApp);
