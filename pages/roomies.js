import Search from '../components/Search'
import CardProfile from '../components/CardProfile'
import styles from '../styles/Components/Roomies.module.scss'

const Roomies = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <Search />
        <section className={styles.Cards}>
          <h1>Conoce Roomies</h1>
          <CardProfile />
        </section>
      </div>
    </>
  )
}

export default Roomies
