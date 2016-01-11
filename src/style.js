import Radium from 'radium'

export const modal = {
  top             : '50%',
  left            : '50%',
  right           : 'auto',
  bottom          : 'auto',
  marginRight     : '-50%',
  transform       : 'translate(-50%, -50%)',
  nextLevel: {
    width           : '50%',
    minWidth        : '250px',
    margin          : '120px auto',
    button: {
      border          : 'none',
      padding         : '15px 20px',
      backgroundColor : '#55bbc8',
      borderRadius    : '5px',
      color           : '#fff',
      fontSize        : '20px',
      hover: {
        backgroundColor : '#b1c559'
      }
    }
  }
}

export const winnerDisplay = {
  backgroundColor : '#eee',
  width           : '100%',
  marginTop       : '20px',
  padding         : '20px 0'
}
