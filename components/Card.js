import Link from 'next/link'
import styles from '../styles/Components/Card.module.scss'

const Card = ({ _id, images, price, location, Perfil, ocupation }) => {
  // const { images, price, location } = data
  return (
    <Link href={`/room/${_id}`}>
      <section className={styles.container}>
        {/* <img
          className={styles.like}
          src={isLiked ? './liked.svg' : 'noLiked.svg'}
        alt="like"/> */}
        <img
          className={styles.placePhoto}
          src={images}
          alt="place photo"/>
        <div className={styles.hostInfo}>
          <img src={Perfil} alt="photo host"/>
          <p>Name</p>
        </div>
        <footer>
          <p>${price}MXN / mes</p>
          <p>Roomie: {ocupation}/{location}</p>
        </footer>
      </section>
    </Link>
  )
}

export default Card
