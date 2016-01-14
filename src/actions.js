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

export const RANDOMIZE_COLORS = (gridWidth) => {
  let characters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
  let numOfColors = (gridWidth * gridWidth) - 1
  let colorScheme = ['transparent']
  for (let i = 0; i < numOfColors; i++) {
    let hexCode = '#'
    for (let i = 0; i < 6; i++) {
       let random = Math.round(Math.random() * (characters.length - 1))
       hexCode += characters[random]
    }
    colorScheme.push(hexCode)
  }
  return {
    type: 'RANDOMIZE_COLORS',
    data: {
      cellColors: colorScheme
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
