import PropTypes from 'prop-types'
import style from '../styles/Components/Register.module.scss';
import { connect } from 'react-redux';
import { registerRequest } from '../actions/index';
import { useState } from 'react';

function Register ({ handleClose, show, modal, props }) {
  const showHideClassName = show ? style.principalContainer : style.displayNone;

  const [form, setValues] = useState({
    email: '',
    name: '',
    lname: '',
    password: '',
    date: '',
    sex: '',
    phone: '',
  });

  const updateInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.registerRequest(form, '/login')
  }

  const handleLogin = () => {
    modal(2)
  }

  return (
    <div className={showHideClassName}>
      <article className={style.container}>
        <div>
          <span onClick={handleClose}>X</span>
          <h2>Registro</h2>
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              id='name'
              name='name'
              placeholder='Nombre'
              onChange={updateInput}
            />
            <input
              type='text'
              id='lname'
              name='lname'
              placeholder='Apellido'
              onChange={updateInput}
            />
            <article>
              <section>
                <input
                  type='date'
                  id='date'
                  name='date'
                  min='2018-01-01'
                  onChange={updateInput}
                />
                <input
                  type='text'
                  id='regemail'
                  name='email'
                  placeholder='Correo'
                  pattern='^[\w\._]{2,30}\+?[\w]{0,10}@[\w\.\-]{3,15}\.\w{2,7}$'
                  title='Usa una cuenta de correo válida'
                  required
                  onChange={updateInput}
                />
                <input
                  type='password'
                  id='regpwd'
                  name='password'
                  placeholder='Contraseña'
                  required
                  onChange={updateInput}
                />
              </section>
              <section>
                <select id='gender' name='sex' onChange={updateInput}>
                  <option value='Hombre'>Hombre</option>
                  <option value='Mujer'>Mujer</option>
                  <option value='Otro'>Otro</option>
                </select>
                <input
                  id='phone'
                  name='phone'
                  type='text'
                  title='Usa un número válido'
                  pattern='^\d{7,11}$'
                  placeholder='Teléfono'
                  required
                  onChange={updateInput}
                />
                <input
                  type='password'
                  id='pwdconf'
                  name='pwdconf'
                  placeholder='Confirma tu Contraseña'
                  required
                />
              </section>
            </article>
            <input type='submit' value='Ingresar' className='register-btn' />
          </form>
          <p>
            ¿Ya tienes una cuenta?
            <span onClick={handleLogin}>Inicia sesión</span>
          </p>
        </div>
      </article>
    </div>
  );
}

const mapDispatchToProps = {
  registerRequest
}

Register.propTypes = {
  registerUser: PropTypes.func
}

export default connect(null, mapDispatchToProps)(Register)
