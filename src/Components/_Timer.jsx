import React from 'react'
import * as helper from '../helpers/helpers.js'

class Timer extends React.Component {

  render() {
    const { colorScheme, level, score, timeLeft } = this.props

    let opacity = (timeLeft / 60)
    console.log(timeLeft)

    let styles = {
      container: {
        width: '100%',
        paddingTop: '30px'
      },
      timer: {
        width: (timeLeft * 4.1) + 'px',
        height: '5px',
        margin: '0 auto',
        borderRadius: 2.5,
        backgroundColor: 'rgba(' + colorScheme.toJS().cell + ',' + opacity + ')'
      }
    }

    return (
      <div style={styles.container}>
        <div style={styles.timer}></div>
      </div>
    )
  }
}


export default Timer
