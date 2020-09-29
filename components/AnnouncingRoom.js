import style from '../styles/Components/AnnouncingRoom.module.scss'
import { connect } from 'react-redux'
import { loginRequest } from '../actions/index'
import { useState } from 'react'

function AnnouncingRoom ({ handleClose, show, modal, props }) {
  const showHideClassName = show ? style.principalContainer : style.displayNone

  const [form, setValues] = useState({
    email: ''
  })

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.loginRequest(form)
    props.history.push('/')
  }

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
                  onChange={handleInput}
                />
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Descripción de la habitación"
                  onChange={handleInput}
                ></textarea>
              </article>
              <article>
                <input type="text" placeholder="Ubicación" required onChange={handleInput}/>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Descripción del sector"
                  onChange={handleInput}
                ></textarea>
              </article>
              <article>
                <input type="text" placeholder="Características" required onChange={handleInput}/>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Acerca de ti"
                  onChange={handleInput}
                ></textarea>
              </article>
            </section>
            <input type="submit" value="Publicar"/>
          </form>
        </div>
      </article>
    </div>
  )
}

const mapDispatchToProps = {
  loginRequest
}

export default connect(null, mapDispatchToProps)(AnnouncingRoom);
