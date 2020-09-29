import styles from '../styles/Components/Home.module.scss'
import Layout from '../components/Layout'
import Search from '../components/Search'
import Hero from '../components/Hero'
import Card from '../components/Card'

// import { useForm } from '../hooks/useForm'
// import styles from '../styles/Components/Search.module.scss'
// import Router, { useRouter } from 'next/router'

import { useState, useEffect } from 'react'

export default function Home () {
  const [room, setRoom] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/api/rooms')
      .then((response) => response.json())
      .then((data) => setRoom(data))
  }, [])

  // const router = useRouter()
  // const { q = '' } = router.query
  // console.log(q)
  // const [formValues, handleInputChange] = useForm({
  //   searchText: q
  // })

  // const { searchText } = formValues

  // const getRoomsByLocation = (location = '') => {
  //   if (location === '') {
  //     return []
  //   }
  //   location = location.toLocaleLowerCase()
  //   return room.filter(rooms => rooms.location.toLocaleLowerCase().includes(location))
  // }

  // const roomsFiltered = useMemo(() => getRoomsByLocation(q), [q])

  // const handleSearch = (e) => {
  //   e.preventDefault()
  //   Router.push(`?q=${searchText}`)
  // }

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
              room.data?.map((item) => (
                <Card key={item.id} {...item} />
              ))
            }

            {/* {
              roomsFiltered.map(room => (
                <Card
                  key={ room.id }
                  { ...room }
                />
              ))
            } */}
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
