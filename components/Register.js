import style from "../styles/Register.module.scss";
import Link from "next/link";

export default function Register({ handleClose, show }) {
  const showHideClassName = show ? style.container : style.displayNone;
  return (
    <article className={showHideClassName}>
      <div>
        <span onClick={handleClose}>X</span>
        <h2>Registro</h2>
        <form action="">
          <input type="text" id="name" name="name" placeholder="Nombre" />
          <input type="text" id="lname" name="lname" placeholder="Apellido" />
          <article>
            <section>
              <input
                type="date"
                id="start"
                name="trip-start"
                min="2018-01-01"
              />
              <input
                type="text"
                id="regemail"
                name="regemail"
                placeholder="Correo"
                pattern="^[\w\._]{2,30}\+?[\w]{0,10}@[\w\.\-]{3,15}\.\w{2,7}$"
                title="Usa una cuenta de correo válida"
                required
              />
              <input
                type="password"
                id="regpwd"
                name="regpwd"
                placeholder="Contraseña"
                required
              />
            </section>
            <section>
              <select id="gender" name="gender">
                <option value="Hombre">Hombre</option>
                <option value="Mujer">Mujer</option>
                <option value="Otro">Otro</option>
              </select>
              <input
                type="text"
                title="Usa un número válido"
                pattern="^\d{7,11}$"
                placeholder="Teléfono"
                required
              />
              <input
                type="password"
                id="pwdconf"
                name="pwdconf"
                placeholder="Confirma tu Contraseña"
                required
              />
            </section>
          </article>
          <input type="submit" value="Ingresar" className="register-btn" />
        </form>
        <p>
          ¿Ya tienes una cuenta? <Link href="/">Inicia sesión</Link>
        </p>
      </div>
    </article>
  );
}
