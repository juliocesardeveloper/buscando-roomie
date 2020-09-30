import style from "../styles/Components/Login.module.scss"
import PropTypes from 'prop-types'
import { connect } from "react-redux"
import { loginUser } from "../actions/index"
import { useState } from "react"

function Login({ handleClose, show, modal }) {
  const showHideClassName = show ? style.principalContainer : style.displayNone;

  const [form, setValues] = useState({
    email: '',
    id: '',
    name: ''
  })

  const updateInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.loginUser(form, '/')
  }
  

  const handleRegister = () => {
    modal(1)
  }

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
              onChange={updateInput}
            />
            <input
              type="password"
              id="pwd"
              name="pwd"
              placeholder="Contraseña"
              required
              pattern="^\w{6,10}$"
              title="Usa una contraseña con más de 6 caracteres"
              onChange={updateInput}
            />
            <input type="submit" value="Ingresar" />
          </form>
          <p>
            ¿No tienes una cuenta?
            <span onClick={handleRegister}>Regístrate</span>
          </p>
        </div>
      </article>
    </div>
  );
}

const mapDispatchToProps = {
  loginUser
}

Login.propTypes = {
  loginUser: PropTypes.func
}

export default connect(null, mapDispatchToProps)(Login)
