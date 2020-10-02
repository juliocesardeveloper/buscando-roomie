import styles from '../styles/Components/Home.module.scss'
import Layout from '../components/Layout'
import Search from '../components/Search'
import Hero from '../components/Hero'
import Card from '../components/Card'

import { useState, useEffect } from "react"

export default function Home() {

  const [room, setRoom] = useState([])

  useEffect(() => {
    fetch("http://localhost:8080/api/rooms")
      .then((response) => response.json())
      .then((data) => setRoom(data));
  }, []);

  return (
    <>
      <Layout>
        <Search />
        <Hero
          heroImage={ '/heroImage.png'}
        />
        <main>
          <h1 className={styles.title}>Habitaciones disponibles</h1>
          <section className={styles.main}>
            {room.data?.map((item) => (
              <Card key={item.id} {...item} />
            ))
            }
          </section>
        </main>

      </Layout>
    </>
  );
}

// const mapStateToProps = ({ eventReducer }) => eventReducer
// const mapDispatchToProps = {
//   getEventRecents
// }
