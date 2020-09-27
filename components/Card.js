import Link from 'next/link'
import styles from '../styles/Components/Card.module.scss'

const Card = ({ images, price, location }) => {
  // const { images, price, location } = data
  return (
    <Link href="/room/id">
      <section className={styles.container}>
        {/* <img
          className={styles.like}
          src={isLiked ? './liked.svg' : 'noLiked.svg'}
        alt="like"/> */}
        <img
          className={styles.placePhoto}
          src={images}
          alt="place photo"/>
        {/* <div className={styles.hostInfo}>
          <img src={photoHost} alt="photo host"/>
          <p>{hostName}</p>
        </div> */}
        <footer>
          <p>${price}MXN / mes</p>
          <p>{location}</p>
        </footer>
      </section>
    </Link>
  )
}

export default Card
