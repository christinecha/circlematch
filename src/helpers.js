export const randomLevel = () => {
  let initialState = [0,1,2,3,4,5,6,7,8]
  let testingState = initialState.join('')
  let verifiedSolutions = []
  let possibleSolutions = [testingState]
  let possibleMoves = [1,-1,3,-3]

  const randomNum = (min, max) => {
    return Math.round(Math.random() * (max - min)) + min
  }

  const checkNextState = () => {
    for (let i = verifiedSolutions.length; i < possibleSolutions.length; i++) {
      testingState = possibleSolutions[randomNum(verifiedSolutions.length, possibleSolutions.length - 1)]
      let testingStateArray = testingState.split('')
      console.log('checking state ', testingState)

      for (let i = 0; i < possibleMoves.length; i++) {
        let move = possibleMoves[randomNum(0, possibleMoves.length - 1)]
        let emptyCellId = testingStateArray.indexOf('0')
        let movingCellId = emptyCellId + move

        if ((movingCellId >= 0) && (movingCellId < 9)) {
          if (([2, 5, 8].indexOf(emptyCellId) >= 0) && (move == 1)) {
            // illegal
          } else if (([0, 3, 6].indexOf(emptyCellId) >= 0) && (move == -1)) {
            // illegal
          } else {
            let newState = testingStateArray
            newState[emptyCellId] = newState[movingCellId]
            newState[movingCellId] = '0'
            let newStateCode = newState.join('')
            if (possibleSolutions.indexOf(newStateCode) < 0) {
              possibleSolutions.push(newStateCode)
            } else {
              // already there
            }
          }
        }
      }
      verifiedSolutions.push(testingState)
    }
  }
  checkNextState()

  let randomCombo = possibleSolutions[randomNum(0, possibleSolutions.length - 1)]
  let randomComboArray = randomCombo.split('')
  return randomComboArray
}
