import React, { Component } from 'react'
import Lottie from 'react-lottie'
import animationData from './error.json'
import styles from '../../Components/PagenotFound.module.scss'

class NotFound extends Component {
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
        <h1>Page Not Found</h1>
        <Lottie options={defaultOptions}/>
      </div>
    )
  }
}

export default NotFound
