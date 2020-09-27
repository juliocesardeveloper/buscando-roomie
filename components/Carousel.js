import { useState } from 'react'
import styles from '../styles/Components/Carousel.module.scss'

const Carousel = () => {
  const sliderArr = [
    'https://hotelmarianza.com/wp-content/uploads/2019/01/foto-hero-habitaciones1.jpg',
    'https://tecnohotelnews.com/wp-content/uploads/2020/07/image004-2.jpg',
    'https://i.pinimg.com/originals/1d/41/20/1d4120379b47b7bf88a08d2143258870.jpg',
  ]
  const [x, setX] = useState(0)
  const goLeft = () => {
    x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100)
  }
  const goRight = () => {
    x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100)
  }
  return (
    <section className={styles.slider}>
      {sliderArr.map((item, index) => {
        return (
          <div key={index} className={styles.slide} style={{ transform: `translateX(${x}%)` }}>
            {<img className={styles.image} src={item} alt="image-slide" ></img>}
          </div>
        )
      })
      }
      <button id={styles.goLeft} onClick={goLeft}>
        <span><img src="/left.svg" alt="left button"/></span>
      </button>
      <button id={styles.goRigth} onClick={goRight}>
        <span><img src={'/right.svg'} alt="right button"/></span>
      </button>
    </section>
  )
}

export default Carousel
