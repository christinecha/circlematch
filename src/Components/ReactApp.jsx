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
      const { dispatch, cellData, winningCombo, winner, level, modalIsOpen, animation } = this.props
      if (modalIsOpen == true) {
        dispatch(action.CLOSE_MODAL())
      } else {
        dispatch(action.MOVE_CELLS(cellData.toJS(), e.keyCode, winningCombo.toJS()))
      }
    })
  }

  componentDidUpdate() {
    const { dispatch, winner, level, modalIsOpen, timerIsRunning } = this.props
    if (winner == true) {
      dispatch(action.SET_LEVEL(level + 1))
    } else if (timerIsRunning == false) {
      this.runTimer()
    }
  }

  runTimer() {
    let timer = setInterval(() => {
      const { dispatch, timeLeft, winner, modalIsOpen } = this.props
      if (winner == true || parseInt(timeLeft) <= 0 || modalIsOpen == true ) {
        clearInterval(timer)
      } else {
        let newTimeLeft = parseInt(timeLeft) - 1
        dispatch(action.TIMER(newTimeLeft))
      }
    }, 1000)
  }

  closeModal() {
    const { dispatch } = this.props
    dispatch(action.CLOSE_MODAL())
  }

  solvePuzzle() {
    const { dispatch, cellData, winningCombo, level } = this.props
    dispatch(action.SOLVE_PUZZLE(cellData, winningCombo, level))
  }

  render() {
    const {
      animation,
      autoSolved,
      cellColors,
      cellData,
      gridWidth,
      level,
      modalIsOpen,
      winner,
      winningCombo,
      timeLeft,
      timerIsRunning
    } = this.props
    return (
      <div>
        <h2>circlematch</h2>
        <p>use your arrow keys to move</p>
        <br />
        <Modal isOpen={modalIsOpen} style={style.modal}>
          <_NextLevel
            level={level}
            autoSolved={autoSolved}
            closeModal={() => this.closeModal()}/>
        </Modal>
        <Grid
          width={gridWidth}
          cellData={cellData}
          cellColors={cellColors}
          animation={animation} />
        <Sidebar
          width={gridWidth}
          cellColors={cellColors}
          level={level}
          winningCombo={winningCombo}
          onSolveButtonClick = {() => this.solvePuzzle()} />
        <h2 style={style.timer}>
          00:{timeLeft}
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
    modalIsOpen: state.get('modalIsOpen'),
    autoSolved: state.get('autoSolved'),
    animation: state.get('animation'),
    timeLeft: state.get('timeLeft'),
    timerIsRunning: state.get('timerIsRunning')
  }
}

export const AppContainer = connect(mapStateToProps)(ReactApp);
