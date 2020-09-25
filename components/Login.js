import style from '../styles/Login.module.scss'
import Link from 'next/link'

export default function Login ({ handleClose, show }) {
  const showHideClassName = show ? style.principalContainer : style.displayNone
  return (
    <div className={showHideClassName}>
      <article className={style.container}>
        <div>
          <span onClick={handleClose}>X</span>
          <h2>Iniciar sesión</h2>
          <form action="">
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Correo"
              pattern="^[\w\._]{2,30}\+?[\w]{0,10}@[\w\.\-]{3,15}\.\w{2,7}$"
              title="Usa una cuenta de correo válida"
              required
            />
            <input
              type="password"
              id="pwd"
              name="pwd"
              placeholder="Contraseña"
              required
            />
            <input type="submit" value="Ingresar" />
          </form>
          <p>
            ¿No tienes una cuenta? <Link href="">Regístrate</Link>
          </p>
        </div>
      </article>
    </div>
  )
}
