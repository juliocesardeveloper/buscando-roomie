import Header from '../components/Header'
import Footer from '../components/Footer'

import styles from '../styles/Components/Profile.module.scss'

const Profile = () => {
  return (
    <>
      <Header />
      <section className={styles.mainContainer}>
        <div className={styles.Perfil}>
          <div className={styles.Super}>
            <div className={styles.Foto}></div>
          </div>
          <div className={styles.Infe}>
            <button className={styles.like}>
              <a href="/roomies">Me gusta</a>
            </button>
            <button className={styles.noLike}>
              No me gusta
            </button>
          </div>
        </div>
        <form className={styles.Info} action="">
          <input type="text" placeholder="¿Cómo te describes?" />
          <input type="text" placeholder="¿Que buscas?" />
          <input type="text" placeholder="Cosas que te gustan" />
        </form>
      </section>
      <Footer />
    </>
  )
}

export default Profile