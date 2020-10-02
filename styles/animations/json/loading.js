import React, { Component } from 'react'
import Lottie from 'react-lottie'
import animationData from './loading.json'

class Loading extends Component {
  render () {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    }

    return (
      <div className="Uncontrolled">
        <h1>cargando . . .</h1>
        <Lottie options={defaultOptions} height={600} width={900} />
      </div>
    )
  }
}

export default Loading
