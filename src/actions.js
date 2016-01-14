import {moveCells} from './action_helpers/move_cells.js'
import * as helper from './action_helpers/helpers.js'

export const SOLVE_PUZZLE = (gridWidth, cellData, winningCombo, level) => {
  helper.solvePuzzle(gridWidth, cellData.toJS(),winningCombo.toJS())
  return {
    type: 'SOLVE_PUZZLE',
    data: {
      winner: true,
      autoSolved: true,
      level: level - 1
    }
  }
}

export const MOVE_CELLS = (gridWidth, cellData, keyCode, winningCombo) => {
  return moveCells(gridWidth, cellData, keyCode, winningCombo)
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

export const SET_LEVEL = (level, gridWidth) => {
  let newLevel = helper.randomLevel(gridWidth)
  return {
    type: 'SET_LEVEL',
    data: {
      winner: false,
      level: level,
      winningCombo: newLevel,
      autoSolved: false,
      timerIsRunning: false,
      timeLeft: 60
    }
  }
}

export const OPEN_MODAL = () => {
  return {
    type: 'OPEN_MODAL',
    data: {
      modalIsOpen: true
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

export const RESIZE_GRID = (gridWidth) => {
  let numOfCells = gridWidth * gridWidth
  let cellData = []
  let animation = []
  for (let i = 0; i < numOfCells; i++) {
    cellData.push(i)
    animation.push('')
  }
  return {
    type: 'RESIZE_GRID',
    data: {
      cellData: cellData,
      gridWidth: gridWidth,
      winner: false
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
