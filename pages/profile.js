import Layout from '../components/Layout'

import styles from '../styles/Components/Profile.module.scss'

const Profile = () => {
  return (
    <>
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
          <div className={styles.boxInfo}>
            <span>
              ¿Cómo te describes?
            </span>
            <input type="text" />
          </div>
          <div className={styles.boxInfo}>
            <span>
              ¿Que buscas?
            </span>
            <input type="text" />
          </div>
          <div className={styles.boxInfo}>
            <span>
              Cosas que te gustan
            </span>
            <input type="text" />
          </div>
        </form>
      </section>
    </>
  )
}

export default Profile
