"use strict"
import React from 'react'
import * as style from '../style.js'

class _NextLevel extends React.Component {
  render() {
    const {level, closeModal, autoSolved} = this.props
    let announcement = 'you got it!'
    if (autoSolved == true) {
      announcement = 'auto-solved!'
    }

    return (
      <div style={style.modal.nextLevel}>
        <h1>{announcement}</h1>
        <br />
        <button
          style={style.modal.nextLevel.button}
          onClick={closeModal}>
          press any key to continue
        </button>
      </div>
    )
  }
}

export default _NextLevel
