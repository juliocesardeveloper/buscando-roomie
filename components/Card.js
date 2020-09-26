import Link from 'next/link'
import styles from '../styles/Card.module.scss'

const Card = ({ room }) => {
  console.log(room)
  return (
    <Link href={'room/abc'}>
      <section className={styles.container}>
        <img
          className={styles.like}
          src={room.isLiked ? './liked.svg' : 'noLiked.svg'}
          alt="like"/>
        <img
          className={styles.placePhoto}
          src={room.photoPlace}
          alt="place photo"/>
        <div className={styles.hostInfo}>
          <img src={room.photoHost} alt="photo host"/>
          <p>{room.hostName}</p>
        </div>
        <footer>
          <p>${room.price}COP / mes</p>
          <p>{room.city}</p>
        </footer>
      </section>
    </Link>
  )
}

export default Card
