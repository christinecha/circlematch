"use strict"

import React from 'react'
import * as style from '../style.js'

class Toolbar extends React.Component {
  render() {
    return (
      <div style={style.toolbar}>
        <div style={style.toolbar.group}>
          <div style={style.toolbar.label}>gridwidth</div>
          <span style={style.toolbar.arrow} className="hover1">-</span>
          <span style={style.toolbar.value}>{this.props.gridWidth}</span>
          <span style={style.toolbar.arrow} className="hover1">+</span>
        </div>
        <div style={style.toolbar.group}>
          <div style={style.toolbar.label}>colors</div>
          <div
            style={style.toolbar.button}
            className="hover1"
            onClick={this.props.randomizeColors}>
            randomize
          </div>
        </div>
      </div>
    )
  }
}

export default Toolbar
