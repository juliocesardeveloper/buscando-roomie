import styles from '../styles/Components/Home.module.scss'
import Layout from '../components/Layout'
import Search from '../components/Search'
import Hero from '../components/Hero'
import Card from '../components/Card'
// import axios from 'axios'
// import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import useFetchCardRoom from '../hooks/useFetchCardRoom'

export default function Home () {
  const router = useRouter()
  const { rooms } = router.query
  const { room } = useFetchCardRoom(rooms)
  console.log(room)

  return (
    <>
      <Layout>
        <Search />
        <Hero
          heroImage={
            'https://i.picsum.photos/id/943/600/500.jpg?hmac=FDXOi156vidMKBiwEiT5-oVIpP7X4dXd54S1-1xDQRM'
          }
        />
        <main>
          <h1 className={styles.title}>Habitaciones disponibles</h1>
          <section className={styles.main}>
            {
              room.map((item) => (
                <Card key={item.id} {...item} />
              ))
            }

            {/* <Card
              images={
                "https://cf.bstatic.com/images/hotel/max1024x768/213/213503501.jpg"
              }
              price={"100.000"}
              location={"Medellín"}
            /> */}
          </section>
        </main>
      </Layout>
    </>
  )
}

// const mapStateToProps = ({ eventReducer }) => eventReducer
// const mapDispatchToProps = {
//   getEventRecents
// }
