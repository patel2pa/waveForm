import React, { Component } from 'react'
import Slider from 'react-rangeslider'

class Horizontal extends Component {
  


  handleChange = value => {
    this.setState({
      value: value
    })
  };


  render () {
    return (
      <div className='slider'>
        <Slider
          min={0}
          max={10}
          value={this.props.value}
          onChange={this.props.handleChange}
        />
      </div>
    )
  }
}

export default Horizontal