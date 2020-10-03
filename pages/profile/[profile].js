import Carousel from '../../components/Carousel'
import { useRouter } from 'next/router'
import styles from '../../styles/Components/Room.module.scss'
import { useState, useEffect } from 'react'

const price = '100.000'
const city = 'Medellín'
const aboutRoom = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae blandit dignissim nullam quis lorem duis sollicitudin. Proin eget ipsum facilisi justo, pharetra, porttitor. Semper nunc id mi etiam scelerisque dolor proin aliquam. Et vulputate commodo sit enim amet gravida.'
const services = ['Servicio 1', 'Servicio 2', 'Servicio 3', 'Servicio 4']
const hostName = '{host}'
const photoHost = 'https://www.eyescreamproductions.com/allaccess/wp-content/uploads/2012/11/2011DaveGrohlNMEAwardsDC200112.jpg'

const Room = () => {
  const router = useRouter()
  const { room } = router.query
  return (
    <>
      <Carousel />
      <section className={styles.containerDetails}>
        <article className={styles.infoRoom}>
          <h2>${price}COP / en {city}</h2>
          <h2>Sobre la habitación</h2>
          <p>{aboutRoom}</p>
          <h2>Servicios</h2>
          <ul>
            {services.map((item, index) => (
              <li key={index}>{ item }</li>
            ))}
          </ul>
          <h2>Sobre la ubicación</h2>
          <p>{aboutRoom}</p>
        </article>
        <article className={styles.infoHost}>
          <h2>Sobre {hostName}</h2>
          <img className={styles.photoHost} src={photoHost} alt="Photo host"/>
          <p>{aboutRoom}</p>
          <small>Te gustó la habitación?</small>
          <small>Comunicate con {hostName}</small>
          <article>
            <a href="/"><img src="/whatsapp.svg" alt=""/></a>
            <a href="/"><img src="/email.svg" alt=""/></a>
          </article>
        </article>
      </section>
    </>
  )
}

export default Room