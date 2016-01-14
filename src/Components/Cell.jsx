"use strict"

import React from 'react'

class Cell extends React.Component {

    render() {
        const { position, color, key, animation } = this.props
        let border = '5px solid #eee'

        if (color == 'transparent') {
          border = '5px solid transparent'
        }
        const style = {
          gridCell: {
            position: 'relative',
            animation: animation,
            WebkitAnimation: animation,
            MozAnimation: animation,
            OAnimation: animation,
            backgroundColor: color,
            border: border,
            boxSizing: 'border-box',
            textAlign: 'center',
            width: '33.33%',
            height: '33.33%',
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
