import styles from '../styles/Card.module.scss'

const Card = ({ isLiked, photoPlace, price, city, photoHost, hostName }) => {
  return (
    <section className={styles.container}>
      <img
        className={styles.like}
        src={isLiked ? './liked.svg' : 'noLiked.svg'}
        alt="like"/>
      <img
        className={styles.placePhoto}
        src={photoPlace}
        alt="place photo"/>
      <div className={styles.hostInfo}>
        <img src={photoHost} alt="photo host"/>
        <p>{hostName}</p>
      </div>
      <footer>
        <p>${price}COP / mes</p>
        <p>{city}</p>
      </footer>
    </section>
  )
}

export default Card
