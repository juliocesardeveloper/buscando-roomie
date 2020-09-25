import style from "../styles/Login.module.scss";
import Link from "next/link";
import { connect } from "react-redux";
import { loginRequest } from "../actions/index";
import { useState } from "react";

function Login({ handleClose, show, props }) {
  const showHideClassName = show ? style.principalContainer : style.displayNone;

  const [form, setValues] = useState({
    email: "",
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.loginRequest(form);
    props.history.push("/");
  };

  console.log(form);

  return (
    <div className={showHideClassName}>
      <article className={style.container}>
        <div>
          <span onClick={handleClose}>X</span>
          <h2>Iniciar sesión</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Correo"
              pattern="^[\w\._]{2,30}\+?[\w]{0,10}@[\w\.\-]{3,15}\.\w{2,7}$"
              title="Usa una cuenta de correo válida"
              required
              onChange={handleInput}
            />
            <input
              type="password"
              id="pwd"
              name="pwd"
              placeholder="Contraseña"
              required
              pattern="^\w{6,10}$"
              title="Usa una contraseña con más de 6 caracteres"
              onChange={handleInput}
            />
            <input type="submit" value="Ingresar" />
          </form>
          <p>
            ¿No tienes una cuenta? <Link href="">Regístrate</Link>
          </p>
        </div>
      </article>
    </div>
  );
}

const mapDispatchToProps = {
  loginRequest,
};

export default connect(null, mapDispatchToProps)(Login);
