import Head from "next/head";
// import styles from "../styles/Home.module.scss";
import { useState } from "react";
import Login from "../components/Login";
import Register from "../components/Register";

export default function Home() {
  let [login, setLogin] = useState(false);
  let [register, setRegister] = useState(false);

  const showModal = () => {
    setLogin((login = true));
  };

  const hideModal = () => {
    setLogin((login = false));
  };

  const showModal2 = () => {
    setRegister((register = true));
  };

  const hideModal2 = () => {
    setRegister((register = false));
  };

  return (
    <div>
      <h1>Hola</h1>
      <Login show={login} handleClose={hideModal} />
      <Register show={register} handleClose={hideModal2} />
      <button type="button" onClick={showModal}>
        Login
      </button>
      <button type="button" onClick={showModal2}>
        Register
      </button>
    </div>
  );
}
