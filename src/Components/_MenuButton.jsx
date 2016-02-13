"use strict"

import React from 'react'
import Timer from './_Timer.jsx'

class MenuButton extends React.Component {

  render() {
    const { colorScheme, level, openMenu, score, timeLeft } = this.props

    let opacity = (timeLeft / 60)
    console.log(timeLeft)

    let styles = {
      container: {
        width: '100%',
        paddingTop: '50px'
      },
      menuButton: {
        width: '20px',
        height: '20px',
        marginBottom: '10px'
      },
      timer: {
        margin: '0 auto',
        width: (timeLeft * 4.1) + 'px',
        height: '5px',
        borderRadius: '5px',
        backgroundColor: 'rgba(' + colorScheme.toJS().cell + ',' + opacity + ')'
      }
    }

    return (
      <div onClick={() => openMenu()}>
        <div style={styles.container}>
          <div style={styles.timer}></div>
        </div>
      </div>
    )
  }

}

export default MenuButton
