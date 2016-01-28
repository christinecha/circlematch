"use strict"

import React from 'react'

class Cell extends React.Component {

    render() {
        const { cellSize, cellColor, position, key, animation, borderWidth, opacity } = this.props
        let border = borderWidth + ' solid #eee'

        const style = {
          gridCell: {
            position: 'relative',
            animation: animation,
            WebkitAnimation: animation,
            MozAnimation: animation,
            OAnimation: animation,
            backgroundColor: cellColor,
            opacity: opacity,
            border: border,
            boxSizing: 'border-box',
            textAlign: 'center',
            width: cellSize,
            height: cellSize,
            display: 'inline-block',
            verticalAlign: 'middle',
            borderRadius: '100%'
          },
          innerCell: {
            fontSize: '20px',
            margin: '12px 0'
          }
        }

        return (
          <div style={style.gridCell}>
          </div>
        )
    }
}

export default Cell;
