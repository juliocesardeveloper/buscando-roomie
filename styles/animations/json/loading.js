import React, { Component } from 'react'
import Lottie from 'react-lottie'
import animationData from './loading.json'
import styles from '../../Components/Page-loading.module.scss'

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
      <div className={styles.father}>
        <h1>Cargando . . .</h1>
        <Lottie options={defaultOptions}/>
      </div>
    )
  }
}

export default Loading
