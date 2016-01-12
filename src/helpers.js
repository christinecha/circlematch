"use strict"

export const randomLevel = () => {
  let moves = [1, 3, -1, -3]
  let originalState = [0,1,2,3,4,5,6,7,8]
  let newState = []

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
      movingCell = emptyCell + move

      if (movingCell < 9 && movingCell >= 0){
        if ([2,5,8].indexOf(emptyCell) >= 0 && move == 1) {
          legalmove = false
        } else if ([3,6].indexOf(emptyCell) >= 0 && move == -1) {
          legalmove = false
        } else {
          legalmove = true
          console.log(emptyCell, move)
        }
      }
    }

    let protoState = originalState.slice()
    protoState[emptyCell] = protoState[movingCell]
    protoState[movingCell] = 0

    console.log(originalState)
    console.log(protoState)
    originalState = protoState.slice()
    newState = protoState.slice()
  }

  for (let i = 0; i < 20; i++) {
    generateNewState()
  }

  return newState
}
