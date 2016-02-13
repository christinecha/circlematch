"use strict"

import React from 'react'

class Cell extends React.Component {

    render() {
        const { cellSize, color, position, key, animation, borderWidth, opacity } = this.props

        let borderColor = '#eeeeee'

        if (color == 'transparent') {
          borderColor = 'transparent'
        }

        console.log(animation)

        const style = {
          gridCell: {
            position: 'relative',
            display: 'inline-block',
            animation: animation,
            WebkitAnimation: animation,
            MozAnimation: animation,
            OAnimation: animation,
            backgroundColor: 'rgb(' + color + ')',
            borderColor: borderColor,
            margin: borderWidth,
            justifyContent: 'center',
            alignItems: 'center',
            opacity: opacity,
            width: cellSize,
            height: cellSize,
            borderRadius: cellSize/2,
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
