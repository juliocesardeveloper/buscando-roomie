import Layout from '../../components/Layout'
import Card from '../../components/Card'
import { useRouter } from 'next/router'
import styles from '../../styles/Components/Profile.module.scss'
// import { useState, useEffect } from 'react'

const hostName = 'David'
const photoHost = 'https://www.eyescreamproductions.com/allaccess/wp-content/uploads/2012/11/2011DaveGrohlNMEAwardsDC200112.jpg'
const gender = 'Masculino'
const age = 39
const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae blandit dignissim nullam quis lorem duis sollicitudin. Proin eget ipsum facilisi justo, pharetra, porttitor. Semper nunc id mi etiam scelerisque dolor proin aliquam. Et vulputate commodo sit enim amet gravida.'
const iFind = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae blandit dignissim nullam quis lorem duis sollicitudin.'
const iLike = 'Vitae blandit dignissim nullam quis lorem duis sollicitudin. Proin eget ipsum facilisi justo, pharetra, porttitor'

const Profile = () => {
  const router = useRouter()
  const { room } = router.query
  return (
    <>
      <Layout>
        <main className={styles.container}>
          <section className={styles.user}>
            <article className={styles.userData}>
              <img className={styles.photoHost} src={photoHost} alt="Photo host"/>
              <h3> {hostName} </h3>
              <p> {gender}, {age} años </p>
            </article>
            <article className={styles.contactUser}>
              <small>Comunícate con {hostName}</small>
              <article>
                <a href="/"><img src="/whatsapp.svg" alt=""/></a>
                <a href="/"><img src="/email.svg" alt=""/></a>
              </article>
            </article>
          </section>
          <section className={styles.about}>
            <h2>Acerca de mí</h2>
            <div className={styles.info}>
              <div>
                <h3>Cómo soy</h3>
                <p>{description}</p>
              </div>
              <div>
                <h3>Qué busco</h3>
                <p>{iFind}</p>
              </div>
              <div>
                <h3>Qué me gusta</h3>
                <p>{iLike}</p>
              </div>
            </div>
          </section>
          <section className={styles.cardsSection}>
            <Card />
          </section>
        </main>
      </Layout>
    </>
  )
}

export default Profile