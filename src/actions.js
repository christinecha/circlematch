import {moveCells} from './action_helpers/move_cells.js'
import * as helper from './action_helpers/helpers.js'

export const SOLVE_PUZZLE = (cellData, winningCombo, level) => {
  helper.solvePuzzle(cellData.toJS(),winningCombo.toJS())
  return {
    type: 'SOLVE_PUZZLE',
    data: {
      winner: true,
      autoSolved: true,
      level: level - 1
    }
  }
}

export const MOVE_CELLS = (cellData, keyCode, winningCombo) => {
  return moveCells(cellData, keyCode, winningCombo)
}

export const TIMER = (timeLeft) => {
  if (timeLeft < 10) {
    timeLeft = '0' + timeLeft
  }
  return {
    type: 'TIMER',
    data: {
      timeLeft: timeLeft,
      timerIsRunning: true
    }
  }
}

export const SET_LEVEL = (level) => {
  let newLevel = helper.randomLevel()
  return {
    type: 'SET_LEVEL',
    data: {
      winner: false,
      level: level,
      winningCombo: newLevel,
      modalIsOpen: true,
      autoSolved: false,
      timerIsRunning: false
    }
  }
}

export const CLOSE_MODAL = () => {
  return {
    type: 'CLOSE_MODAL',
    data: {
      modalIsOpen: false,
      timeLeft: 60
    }
  }
}
