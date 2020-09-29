import Header from '../components/Header'
import Search from '../components/Search'
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
            <div className={styles.Container}>
              <div className={styles.Card}>
                <div className={styles.Super}>
                  <div className={styles.Perfil}>
                  </div>
                </div>
                <div className={styles.Infe}>
                  <div className={styles.Text}>
                    <h3>Name</h3>
                  </div>
                  <div className={styles.Buttons}>
                    <button className={styles.like}>
                      Me gusta
                    </button>
                    <button className={styles.noLike}>
                      No me gusta
                    </button>
                  </div>
                </div>
              </div>
            </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default Roomies