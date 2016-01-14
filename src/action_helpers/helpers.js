"use strict"

export const moveIsLegal = (gridWidth, emptyCell, move) => {
  let numOfCells = gridWidth * gridWidth
  let firstOfRows = []
  let lastOfRows = []
  for (let i = 0; i < gridWidth; i++) {
    firstOfRows.push(gridWidth * i)
    lastOfRows.push((gridWidth * i) - 1)
  }
  if (emptyCell + move < numOfCells && emptyCell + move >= 0){
    if (lastOfRows.indexOf(emptyCell) >= 0 && move == 1) {
      return false
    } else if (firstOfRows.indexOf(emptyCell) >= 0 && move == -1) {
      return false
    } else {
      return true
    }
  }
}

const moveScore = (protoState, winningCombo) => {
  let score = 0
  for (let i = 0; i < protoState.length; i++) {
    let distance = Math.abs(winningCombo[i] - protoState[i])
    if (distance == 0) {
      score += 0
    } else if (distance == 1 || distance == 3) {
      score += 1
    } else {
      score += Math.floor(distance / 3) + (distance % 3)
    }
  }
  return score
}

export const matchingSets = (state1, state2) => {
  for (let i = 0; i < state1.length; i++) {
    if (state1[i] != state2[i]) {
      return false
    }
  }
  return true
}

export const alreadyChecked = (state, set) => {
  for (let x = 0; x < set.length; x++) {
    let alreadyChecked = true
    for (let y = 0; y < state.length; y++) {
      if (set[x].state[y] != state[y]) {
        alreadyChecked = false
      }
    }
    if (alreadyChecked == true) {
      return true
    }
  }
  return false
}

export const randomLevel = (gridWidth) => {
  let numOfCells = gridWidth * gridWidth
  let moves = [1, gridWidth, -1, -(gridWidth)]
  let originalState = []
  let newState = []
  for (let i = 0; i < numOfCells; i++) {
    originalState.push(i)
  }

  const randomNum = (min, max) => {
    return Math.round(Math.random() * (max - min)) + min
  }

  const generateNewState = () => {
    let emptyCell = originalState.indexOf(0)
    let legalmove = false
    let move = 0
    let movingCell = ''

    while (legalmove == false) {
      move = moves[randomNum(0, moves.length - 1)]
      if (moveIsLegal(gridWidth, emptyCell, move)) {
        movingCell = emptyCell + move
        legalmove = true
      }
    }

    let protoState = originalState.slice()
    protoState[emptyCell] = protoState[movingCell]
    protoState[movingCell] = 0

    // console.log(originalState)
    // console.log(protoState)
    originalState = protoState.slice()
    newState = protoState.slice()
  }

  for (let i = 0; i < 20; i++) {
    generateNewState()
  }

  return newState
}

export const solvePuzzle = (gridWidth, cellData, winningCombo) => {
  let uncheckedStates = [{score: 0, state: cellData.slice()}]
  let checkedStates = []
  let moves = [1, gridWidth, -1, -(gridWidth)]
  let legalmove = false
  let winner = false

  const allPossibleMoves = () => {
    let originalState = uncheckedStates[0].state.slice()
    let emptyCell = originalState.indexOf(0)
    let legalmove = false
    let movingCell = ''

    for (let i = 0; i < moves.length; i++) {
      let protoState = originalState.slice()
      let move = moves[i]
      if (moveIsLegal(gridWidth, emptyCell, move) == true) {
        movingCell = emptyCell + move
        protoState[emptyCell] = protoState[movingCell]
        protoState[movingCell] = 0

        if (matchingSets(protoState, winningCombo) == true) {
          winner = true
          break
        } else if (alreadyChecked(protoState, checkedStates) == false && alreadyChecked(protoState, uncheckedStates) == false) {
          let score = moveScore(protoState, winningCombo)
          if (uncheckedStates.length > 1 && score < uncheckedStates[1].score) {
            uncheckedStates.splice(1, 0, {
              state: protoState,
              score: score
            })
          } else {
            uncheckedStates.push({
              state: protoState,
              score: score
            })
          }
        }
      }
    }
    checkedStates.push({ state: originalState.slice() })
    uncheckedStates.shift()
    console.log('winner? ' + winner + ' after ' + checkedStates.length + ' moves')
    console.log(originalState.join(' ') + '\n' + winningCombo.join(' '))
  }

  while (winner == false && checkedStates.length < 300) {
    allPossibleMoves()
  }

  if (winner == true) {
    return true
  } else {
    return false
  }
}






//
