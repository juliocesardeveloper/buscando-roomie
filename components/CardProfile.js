import Link from 'next/link'
import styles from '../styles/Components/CardProfile.module.scss'

const CardProfile = ({ _id, Perfil }) => {
  return (
    <Link href={`/perfiles/${_id}`}>
      <section className={styles.container}>
        <div className={styles.Container}>
          <div className={styles.Card}>
            <div className={styles.Super}>
              <div className={styles.Perfil}>
                <img src={Perfil} alt="photo host"/>
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
    </Link>
  )
}

export default CardProfile
