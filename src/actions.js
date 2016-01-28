import {moveCells} from './helpers/move_cells.js'
import * as helper from './helpers/helpers.js'
import * as solutions from './helpers/solutions.js'

export const SOLVE_PUZZLE = (gridWidth, cellData, puzzle, puzzleInfo, level) => {
  console.log(puzzleInfo.toJS())
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

export const SET_LEVEL = (autoSolved, puzzle, puzzleInfo, score, timeLeft) => {

  let points = 0
  if (autoSolved == false) {
    points+= 50
    if (timeLeft < 60 && timeLeft > 45) {
      points = 50 * gridWidth
    } else if (timeLeft < 46 && timeLeft > 30) {
      points = 30 * gridWidth
    } else if (timeLeft < 31 && timeLeft > 15) {
      points = 20 * gridWidth
    } else if (timeLeft < 16 && timeLeft > 0) {
      points = 10 * gridWidth
    }
  }
  let newScore = score + points

  return {
    type: 'SET_LEVEL',
    data: {
      winner: false,
      level: 5,
      cellData: puzzle,
      puzzleInfo: puzzleInfo,
      autoSolved: false,
      timerIsRunning: false,
      timeLeft: 60,
      score: newScore
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
  let hexCode = '#'
  for (let i = 0; i < 6; i++) {
     let random = Math.round(Math.random() * (characters.length - 1))
     hexCode += characters[random]
  }
  return {
    type: 'RANDOMIZE_COLORS',
    data: {
      cellColor: hexCode
    }
  }
}

// export const RESIZE_GRID = (gridWidth) => {
//   let numOfCells = gridWidth * gridWidth
//   let cellData = []
//   let cellColor = ['transparent', '#a86ed4', '#d3b8bc', '#ffa56c', '#ffe273', '#b1c559', '#ed92a3', '#55bbc8', '#5585c6', '#8a6439', '#899089', '#ff683d', '#95287e', '#589542', '#ed60a3', '#55748e', '#d6e2c6']
//   let animation = []
//   for (let i = 0; i < numOfCells; i++) {
//     cellData.push(i)
//     animation.push('')
//   }
//   return {
//     type: 'RESIZE_GRID',
//     data: {
//       cellData: cellData,
//       cellColor: cellColor,
//       gridWidth: gridWidth,
//       winner: false,
//       timeLeft: 0
//     }
//   }
// }

export const CLOSE_MODAL = () => {
  return {
    type: 'CLOSE_MODAL',
    data: {
      modalIsOpen: false,
      timeLeft: 60
    }
  }
}
