import styles from '../styles/Components/Hero.module.scss'

const Hero = ({ heroImage }) => {
  return (
    <>
      <section className={styles.container}>
        <img className={styles.heroImage} src={heroImage} alt="Hero Image"/>
        <div className={styles.welcome}>
          <h1>
            Hola, estás en roomie finder, el lugar ideal para encontrar el roomie de tus sueños.
          </h1>
        </div>
      </section>
    </>
  )
}

export default Hero
