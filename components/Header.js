import style from '../styles/Header.module.css'
import font from '../styles/fontawesome-free-5.14.0-web/css/all.module.css'


function Header(){
          return (
          <>
          <div className={style.header}>
            <div className={`${style["header-bar"]}`}>
              <div className={`${style["header-bar-img-logo"]}`}></div>
              <label className={font.fas + ' ' + `${font["fa-bars"]}` + ' ' + `${style["fa-bars"]}`} id={`${style["slide-nav-button"]}`} htmlFor="menu"></label>
            </div>
            <nav id={`${style["slide-menu"]}`}  className={`${style["slide-menu-nav"]}`}>
              <input type="checkbox" id="menu" className={`${style["font-menu"]}`}/>
              <ul className={`${style["nav-list"]}`}>
                <li className={`${style["nav-list-item"]}`}>
                  <a>Registrate</a>
                </li>
                <li className={`${style["nav-list-item"]}`}>
                  <a>Ingresa</a>
                </li>
                <li className={`${style["nav-list-item"]}`}>
                  <a>Favoritos</a>
                </li>
              </ul>
            </nav>
          </div>
          </>
        )

        
      }

export default Header;