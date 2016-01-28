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
      fontSize        : '20px'
    }
  }
}

export const timer = {
  backgroundColor : '#eee',
  width           : '100%',
  marginTop       : '20px',
  padding         : '10px 0',
  fontSize        : '40px'
}

export const toolbar = {
  width           : '400px',
  margin          : '20px auto',
  padding         : '10px',
  group: {
    display         : 'inline-block',
    margin          : '15px'
  },
  label: {
    textTransform   : 'uppercase',
    marginBottom   : '5px'
  },
  arrow: {
    backgroundColor : '#eee',
    padding         : '5px 10px',
    cursor          : 'pointer'
  },
  value: {
    padding         : '0 10px',
    fontSize        : '22px',
  },
  button: {
    backgroundColor : '#eee',
    padding         : '5px 10px',
    cursor          : 'pointer'
  }
}
