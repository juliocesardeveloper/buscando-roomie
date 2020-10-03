import styles from '../styles/Components/Home.module.scss'
import Search from '../components/Search'
import Hero from '../components/Hero'
import Card from '../components/Card'
import { useState, useEffect } from 'react'

export default function Home () {
  const [room, setRoom] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/api/rooms')
      .then((response) => response.json())
      .then((data) => setRoom(data))
  }, [])

  return (
    <>
      <Search />
      <Hero
        heroImage={ '/heroImage.png'}
      />
      <main className={styles.father}>
        <h1 className={styles.title}>Habitaciones disponibles</h1>
        <section className={styles.main}>
          {room.data?.map((item) => (
            <Card key={item.id} {...item} />
          ))
          }
        </section>
      </main>
    </>
  )
}
