import {moveCells} from './helpers/move_cells.js'
import * as helper from './helpers/helpers.js'
import {solutions} from './solutions.js'

export const SOLVE_PUZZLE = (cellData, level) => {
  // helper.solvePuzzle(gridWidth, cellData,winningCombo)
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

export const SET_LEVEL = (level, gridWidth, score, timeLeft, autoSolved) => {
  // let newLevelData = solutions[level][newLevel]
  // console.log(newLevelData)
  let points = 0
  if (autoSolved == false) {
    points = helper.getPoints(level, timeLeft)
  }
  let newScore = score + points
  let newLevel = Math.floor(newScore / 1000) + 1

  if (solutions.length <= level) { // if you completed the last level
    return {
      type: 'GAME_COMPLETE',
      data: {
        gameComplete: true
      }
    }
  } else {
    let possibleLevels = solutions[level]
    let newPuzzle = possibleLevels[helper.randomNum(0, possibleLevels.length - 1)]

    return {
      type: 'SET_LEVEL',
      data: {
        winner: false,
        level: newLevel,
        cellData: newPuzzle,
        autoSolved: false,
        timerIsRunning: false,
        timeLeft: 60,
        score: newScore
      }
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

export const RANDOMIZE_COLORS = (colorScheme) => {

  let color = []
  for (let i = 0; i < 3; i++) {
     let random = Math.round(helper.randomNum(50, 230))
     color.push(random)
  }

  color = color.join(',')

  return {
    type: 'RANDOMIZE_COLORS',
    data: {
      colorScheme: {
        name: colorScheme.toJS().name,
        background: colorScheme.toJS().background,
        cell: color
      }
    }
  }
}

export const TOGGLE_BACKGROUND_COLOR = (colorScheme) => {

  let newName = colorScheme.toJS().name
  let newBackgroundColor = colorScheme.toJS().background
  let newCellColor = colorScheme.toJS().cell

  if (colorScheme.toJS().name == 'day') {
    newName = 'night'
    newBackgroundColor = '10,10,15'
  } else if (colorScheme.toJS().name == 'night') {
    newName = 'day'
    newBackgroundColor = '241,241,242'
  }

  return {
    type: 'TOGGLE_BACKGROUND_COLOR',
    data: {
      colorScheme: {
        name: newName,
        cell: newCellColor,
        background: newBackgroundColor
      }
    }
  }
}

export const RESET = () => {
  return {
    type: 'RESET',
    data: {
      animations: [],
      backgroundColor: '#f1f1f2',
      gameComplete: false,
      gridWidth: 3,
      cellData: '102345678',
      colorScheme: {
        name: 'day',
        cell: '0, 130, 180',
        background: '241, 241, 242'
      },
      level: 1,
      menuIsOpen: false,
      menuView: 'Main.js',
      modalIsOpen: false,
      autoSolved: false,
      timeLeft: 60,
      timerIsRunning: false,
      score: 0,
      winningCombo: '012345678',
      winner: false
    }
  }
}

export const END_TUTORIAL = () => {
  return {
    type: 'CLOSE_MODAL',
    data: {
      tutorialIsOn: false
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

export const OPEN_MENU = () => {
  return {
    type: 'OPEN_MENU',
    data: {
      menuIsOpen: true,
      timerIsRunning: false
    }
  }
}

export const CLOSE_MENU = () => {
  return {
    type: 'CLOSE_MENU',
    data: {
      menuIsOpen: false,
      timerIsRunning: true
    }
  }
}
