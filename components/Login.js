import style from '../styles/Components/Login.module.scss'
import { useState, useEffect } from 'react'
import axios from 'axios'

function Login ({ handleClose, show, modal, props }) {
  const showHideClassName = show ? style.principalContainer : style.displayNone

  const [form, setValues] = useState({
    email: '',
    id: '',
    name: '',
    password: ''
  })

  useEffect(() => {
  }, [])

  const updateInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const url = 'http://localhost:8080/api/auth/sign-in'
    const token = Buffer.from(`${form.email}:${form.password}`, 'utf8').toString('base64')
    axios({
      method: 'POST',
      url: url,
      auth: {
        username: form.email,
        password: form.password
      },
      headers: {
        Authorization: `Basic ${token}`
      },
      data: {
        apiKeyToken: 'dcaf7f98202fb2a842e0bd6652037e390e4f59f3fc92e29b4b45fe98c5f16a06'
      }
    })
      .then(modal(0))
      .then((res) => {
        localStorage.setItem('usuario', {
          token: res.data.token,
          user: res.data.user
        })
      })
      .catch((error) => {
        console.log(error)
      })
    console.log(JSON.parse(localStorage.getItem('usuario')))
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
              type='text'
              id='email'
              name='email'
              placeholder='Correo'
              pattern='^[\w\._]{2,30}\+?[\w]{0,10}@[\w\.\-]{3,15}\.\w{2,7}$'
              title='Usa una cuenta de correo válida'
              required
              onChange={updateInput}
            />
            <input
              type='password'
              id='pwd'
              name='password'
              placeholder='Contraseña'
              required
              pattern='^\w{6,10}$'
              title='Usa una contraseña con más de 6 caracteres'
              onChange={updateInput}
            />
            <input type='submit' value='Ingresar' />
          </form>
          <p>
            ¿No tienes una cuenta?
            <span onClick={handleRegister}>Regístrate</span>
          </p>
        </div>
      </article>
    </div>
  )
}

export default Login
