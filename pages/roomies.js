import Search from '../components/Search'
import CardProfile from '../components/CardProfile'
import styles from '../styles/Components/Roomies.module.scss'

const Roomies = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <Search />
        <section className={styles.Cards}>
          <h2>Conoce Roomies</h2>
          <CardProfile />
        </section>
      </div>
    </>
  )
}

export default Roomies
