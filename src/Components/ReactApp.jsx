"use strict"

import React from 'react'
import {connect} from 'react-redux'
import Modal from 'react-modal'
import Grid from './Grid.jsx'
import Sidebar from './Sidebar.jsx'
import Toolbar from './Toolbar.jsx'
import _NextLevel from './_NextLevel.jsx'
import * as style from '../style.js'
import * as action from '../actions.js'

let timerLaunched = false

export class ReactApp extends React.Component {

  componentDidMount() {
    window.addEventListener('keydown', (e) => {
      const { dispatch, gridWidth, cellData, winningCombo, winner, level, modalIsOpen, animation } = this.props
      if (modalIsOpen == true) {
        dispatch(action.CLOSE_MODAL())
      } else {
        dispatch(action.MOVE_CELLS(gridWidth, cellData.toJS(), e.keyCode, winningCombo.toJS()))
      }
    })
  }

  componentDidUpdate() {
    const { dispatch, autoSolved, winner, level, modalIsOpen, gridWidth, timeLeft, timerIsRunning, score } = this.props
    if (winner == true) {
      dispatch(action.SET_LEVEL(level + 1, gridWidth, score, timeLeft, autoSolved))
      dispatch(action.OPEN_MODAL())
    } else if (timerIsRunning == false && timeLeft == 60 && timerLaunched == false) {
      this.runTimer()
    }
  }

  runTimer() {
    timerLaunched = true
    let timer = setInterval(() => {
      const { dispatch, timeLeft, winner, modalIsOpen } = this.props
      if (winner == true || parseInt(timeLeft) <= 0 || modalIsOpen == true) {
        clearInterval(timer)
        timerLaunched = false
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
    const { dispatch, gridWidth, cellData, winningCombo, level } = this.props
    dispatch(action.SOLVE_PUZZLE(gridWidth, cellData, winningCombo, level))
  }

  randomizeColors() {
    const { dispatch, gridWidth } = this.props
    dispatch(action.RANDOMIZE_COLORS(gridWidth))
  }

  resizeGrid(increment) {
    const { dispatch, autoSolved, gridWidth, level, score, timeLeft } = this.props
    let newGridWidth = gridWidth + increment
    if (newGridWidth > 4 || gridWidth < 2) {
      return false
    } else {
      dispatch(action.RESIZE_GRID(newGridWidth))
      dispatch(action.SET_LEVEL(level, newGridWidth, score, timeLeft, autoSolved))
    }
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
      score,
      timerIsRunning,
      timeLeft,
      winner,
      winningCombo
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
          gridWidth={gridWidth}
          cellData={cellData}
          cellColors={cellColors}
          animation={animation} />
        <Sidebar
          gridWidth={gridWidth}
          cellColors={cellColors}
          level={level}
          winningCombo={winningCombo}
          score={score}
          onSolveButtonClick = {() => this.solvePuzzle()} />
        <Toolbar
          gridWidth={gridWidth}
          resizeGridDown={() => this.resizeGrid(-1)}
          resizeGridUp={() => this.resizeGrid(1)}
          randomizeColors={() => this.randomizeColors()} />
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
    animation: state.get('animation'),
    autoSolved: state.get('autoSolved'),
    cellColors: state.get('cellColors'),
    cellData: state.get('cellData'),
    gridWidth: state.get('gridWidth'),
    level: state.get('level'),
    modalIsOpen: state.get('modalIsOpen'),
    score: state.get('score'),
    timerIsRunning: state.get('timerIsRunning'),
    timeLeft: state.get('timeLeft'),
    winningCombo: state.get('winningCombo'),
    winner: state.get('winner')
  }
}

export const AppContainer = connect(mapStateToProps)(ReactApp);
