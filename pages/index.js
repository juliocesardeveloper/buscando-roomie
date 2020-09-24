import Head from "next/head";
// import styles from "../styles/Home.module.scss";
import { useState } from "react";
import Login from "../components/Login";
import Register from "../components/Register";

export default function Home() {
  let [login, setLogin] = useState(false);
  let [register, setRegister] = useState(false);

  const showLoginModal = () => {
    setLogin((login = true));
  };

  const hideLoginModal = () => {
    setLogin((login = false));
  };

  const showRegisterModal = () => {
    setRegister((register = true));
  };

  const hideRegisterModal = () => {
    setRegister((register = false));
  };

  return (
    <div>
      <Login show={login} handleClose={hideLoginModal} />
      <Register show={register} handleClose={hideRegisterModal} />
      <button type="button" onClick={showLoginModal}>
        Login
      </button>
      <button type="button" onClick={showRegisterModal}>
        Register
      </button>
    </div>
  );
}
