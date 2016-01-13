import React from 'react'

class Tile extends React.Component {

  render() {
    const { index, color, animation } = this.props
    let style = {
      tile: {
        WebkitTransition: '.3s ease-in',
        MozTransition: '.3s ease-in',
        OTransition: '3s ease-in',
        WebkitTransform: animation,
        MozTransform: animation,
        OTransform: animation,
        MsTransform: animation,
        backgroundColor: color,
        border: '5px solid #eee',
        boxSizing: 'border-box',
        textAlign: 'center',
        width: '33.33%',
        height: '33.33%',
        display: 'inline-block',
        verticalAlign: 'middle',
        borderRadius: '100%'
      },
    }

    return (
      <div style={style.tile}>
      </div>
    )
  }
}

export default Tile
