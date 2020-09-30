import Header from '../components/Header'
import Search from '../components/Search'
import CardProfile from '../components/CardProfile'
import Footer from '../components/Footer'

import styles from '../styles/Components/Roomies.module.scss'

const Roomies = () => {
  return (
    <>
      <Header />
      <div className={styles.mainContainer}>
        <Search />
        <section className={styles.Cards}>
          <h2>Conoce Roomies</h2>
          <CardProfile />
        </section>
      </div>
      <Footer />
    </>
  )
}

export default Roomies