"use strict"
import React from 'react'
import * as style from '../style.js'

class _NextLevel extends React.Component {
  render() {
    const {level, closeModal} = this.props

    return (
      <div style={style.modal.nextLevel}>
        <h1>you got it!</h1>
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
