import Head from 'next/head'
// import styles from "../styles/Home.module.scss";
import { useState } from 'react'
import Login from '../components/Login'
import Register from '../components/Register'
import Card from '../components/Card'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home () {
  let [login, setLogin] = useState(false)
  let [register, setRegister] = useState(false)

  const showLoginModal = () => {
    setLogin((login = true))
  }

  const hideLoginModal = () => {
    setLogin((login = false))
  }

  const showRegisterModal = () => {
    setRegister((register = true))
  }

  const hideRegisterModal = () => {
    setRegister((register = false))
  }

  return (
    <div>
      <Header />
      <Login show={login} handleClose={hideLoginModal} />
      <Register show={register} handleClose={hideRegisterModal} />
      <button type="button" onClick={showLoginModal}>
        Login
      </button>
      <button type="button" onClick={showRegisterModal}>
        Register
      </button>
      <Card
        isLiked={false}
        photoPlace={
          'https://cf.bstatic.com/images/hotel/max1024x768/238/238751575.jpg'
        }
        price={'100.000'}
        city={'Medellin'}
        photoHost={
          'https://pbs.twimg.com/profile_images/1112848027050565633/G0F2EtMn_400x400.jpg'
        }
        hostName={'Name'}
      />
      <Footer />
    </div>
  )
}
