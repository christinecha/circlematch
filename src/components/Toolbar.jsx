"use strict"

import React from 'react'
import * as style from '../style.js'

class Toolbar extends React.Component {
  render() {
    return (
      <div style={style.toolbar}>
        <div style={style.toolbar.group}>
          <div
            style={style.toolbar.button}
            className="hover1"
            onClick={this.props.randomizeColors}>
            randomize color
          </div>
        </div>
      </div>
    )
  }
}

export default Toolbar
