import Link from 'next/link'
import style from '../styles/Components/Header.module.scss'

const Header = (props) => {
  const { modal } = props

  const handleRegister = () => {
    modal(1)
  }

  const handleLogin = () => {
    modal(2)
  }

  return (
    <>
      <div className={`${['fade-in-down header']}`}>
        <div className={`${style['header-bar']}`}>
          <Link href='/'>
            <a><div className={`${style['header-bar-img-logo']}`}></div></a>
          </Link>
          <label
            className={`${style['fa-bars']}`}
            id={`${style['slide-nav-button']}`}
            htmlFor='menu'
          >
            <span>
              <img src='/menu.svg' alt='menu' />
            </span>
          </label>
        </div>
        <nav
          id={`${style['slide-menu']}`}
          className={`${style['slide-menu-nav']}`}
        >
          <input
            type='checkbox'
            id='menu'
            className={`${style['font-menu']}`}
          />
          <ul className={`${style['nav-list']}`}>
            <li className={`${style['nav-list-item']}`}>
              <a onClick={handleRegister}>Registrate</a>
            </li>
            <li className={`${style['nav-list-item']}`}>
              <a onClick={handleLogin}>Ingresa</a>
            </li>
            <li className={`${style['nav-list-item']}`}>
              <a>Favoritos</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Header
