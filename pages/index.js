import styles from "../styles/Components/Home.module.scss";
import Login from "../components/Login";
import Register from "../components/Register";
import Header from "../components/Header";
import Search from "../components/Search";
import Hero from "../components/Hero";
import Card from "../components/Card";

import { useState, useEffect } from "react";

// import Footer from '../components/Footer'

export default function Home() {
  const [room, setRoom] = useState([]);
  const [dato, setDato] = useState(0);

  // useEffect(() => {
  //   fetch("http://localhost:8080/api/rooms")
  //     .then((response) => response.json())
  //     .then((data) => setRoom(data));
  // }, []);

  let [login, setLogin] = useState(false);
  let [register, setRegister] = useState(false);

  useEffect(() => {
    console.log(dato);
    if (dato == 1) {
      setRegister((register = true));
      setLogin((login = false));
    } else if (dato == 2) {
      setLogin((login = true));
      setRegister((register = false));
    }
  });

  function showModal(arg) {
    setDato(arg);
  }

  const hideLoginModal = () => {
    setLogin(false);
    setDato(0);
  };

  const hideRegisterModal = () => {
    setRegister(false);
    setDato(0);
  };

  return (
    <>
      <Header modal={(arg) => showModal(arg)} />
      <div className={styles.container}>
        <Login
          show={login}
          handleClose={hideLoginModal}
          modal={(arg) => showModal(arg)}
        />
        <Register
          show={register}
          handleClose={hideRegisterModal}
          modal={(arg) => showModal(arg)}
        />

        <Search />
        <Hero
          heroImage={
            "https://i.picsum.photos/id/943/600/500.jpg?hmac=FDXOi156vidMKBiwEiT5-oVIpP7X4dXd54S1-1xDQRM"
          }
        />
        <main>
          <h1 className={styles.title}>Habitaciones disponibles</h1>
          <section className={styles.main}>
            {room.data?.map((item) => (
              <Card key={item.id} {...item} />
            ))}
          </section>
        </main>
      </div>
      {/* <Footer /> */}
    </>
  );
}

// const mapStateToProps = ({ eventReducer }) => eventReducer
// const mapDispatchToProps = {
//   getEventRecents
// }
