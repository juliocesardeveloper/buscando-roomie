import style from "../styles/Components/AnnouncingRoom.module.scss";
import Link from "next/link";
import { connect } from "react-redux";
import { loginRequest } from "../actions/index";
import { useState } from "react";

function AnnouncingRoom({ handleClose, show, modal }) {
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

  return (
    <div className={showHideClassName}>
      <article className={style.container}>
        <div>
          <span onClick={handleClose}>X</span>
          <h2>Anuncia un cuarto</h2>
          <form onSubmit={handleSubmit}>
            <section>
              <div>
                <h3>Agrega fotos del cuarto</h3>
                <h6>(mínimo 2 - máximo 8)</h6>
              </div>
              <div>
                <h3>Agrega una foto tuya</h3>
              </div>
            </section>
            <section>
              <article>
                <input
                  type="number"
                  placeholder="Precio de la habitación (USD)"
                  required
                />
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Descripción de la habitación"
                ></textarea>
              </article>
              <article>
                <input type="text" placeholder="Ubicación" required />
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Descripción del sector"
                ></textarea>
              </article>
              <article>
                <input type="text" placeholder="Características" required />
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Acerca de ti"
                ></textarea>
              </article>
            </section>
            {/* <input
              type="text"
              id="email"
              name="email"
              placeholder="Correo"
              pattern="^[\w\._]{2,30}\+?[\w]{0,10}@[\w\.\-]{3,15}\.\w{2,7}$"
              title="Usa una cuenta de correo válida"
              required
              onChange={handleInput}
            /> */}
            <input type="submit" value="Publicar" />
          </form>
        </div>
      </article>
    </div>
  );
}

const mapDispatchToProps = {
  loginRequest,
};

export default connect(null, mapDispatchToProps)(AnnouncingRoom);
