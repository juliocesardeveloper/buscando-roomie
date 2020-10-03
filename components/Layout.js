import styles from '../styles/Components/Home.module.scss'
import Login from '../components/Login'
import Register from '../components/Register'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AnnouncingRoom from '../components/AnnouncingRoom'

import { useState, useEffect } from 'react'

export default function Layout (props) {
  const { children } = props
  const [room, setRoom] = useState([])
  const [dato, setDato] = useState(0)

  let [login, setLogin] = useState(false)
  let [register, setRegister] = useState(false)

  useEffect(() => {
    if (dato === 1) {
      setRegister((register = true))
      setLogin((login = false))
    } else if (dato === 2) {
      setLogin((login = true))
      setRegister((register = false))
    } else if (dato === 0) {
      setLogin((login = false))
      setRegister((register = false))
    }
  })

  function showModal(arg) {
    setDato(arg)
  }

  const hideLoginModal = () => {
    setLogin(false)
    setDato(0)
  }

  const hideRegisterModal = () => {
    setRegister(false);
    setDato(0);
  }

  return (
    <>
      <Header modal={(arg) => showModal(arg)} />
      <div className={styles.container}>
        <Login
          show={login}
          handleClose={hideLoginModal}
          modal={(arg) => showModal(arg)}
        />

        {/* <AnnouncingRoom
          show={login}
          handleClose={hideLoginModal}
          modal={(arg) => showModal(arg)}
        /> */}

        <Register
          show={register}
          handleClose={hideRegisterModal}
          modal={(arg) => showModal(arg)}
        />
        {children}
      </div>
      <Footer />
    </>
  );
}


