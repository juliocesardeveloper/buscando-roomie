import style from '../styles/Components/Footer.module.scss'

function Footer () {
  return (
    <>
      <div className={style.footer}>
        <picture className={`${style['logos-container']}`}>
          <picture className={style.logos}>
            <a href='#'><img src='/facebook-square.svg' alt='logo-facebook' className={`${style.facebook}` + ' ' + `${style.brand}`}/></a>
            <p className={`${style['logo-description']}`}><a>Facebook</a></p>
          </picture>
          <picture className='logos'>
            <a href='#'><img src='/instagram.svg' alt='logo-instagram' className={`${style.instagram}` + ' ' + `${style.brand}`}/></a>
            <p className={`${style['logo-description']}`}><a>Instagram</a></p>
          </picture>
          <picture className='logos'>
            <a href='#'><img src='/twitter-square.svg' alt='logo-twitter' className={`${style.twitter}` + ' ' + `${style.brand}`}/></a>
            <p className={`${style['logo-description']}`}><a>Twitter</a></p>
          </picture>
          <picture className='logos'>
            <a href='#'><img src='/whatsapp.svg' alt='logo-whatsapp' className={`${style.whatsapp}` + ' ' + `${style.brand}`}/></a>
            <p className={`${style['logo-description']}`}><a>Whatsapp</a></p>
          </picture>
        </picture>
        <section className={`${style['footer-contacto']}`}>
          <div>
            <h4>Contactanos</h4>
          </div>
          <div className={`${style['footer-contacto-elements']}`}>
            <p>Tel: +57 55555500000</p>
            <p>Email: elemail@elemail.com </p>
            <p>Fax: +24 sdfsdsdfsdf</p>
          </div>
        </section>
      </div>
    </>
  )
}

export default Footer
