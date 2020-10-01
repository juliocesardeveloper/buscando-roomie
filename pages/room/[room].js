import Carousel from '../../components/Carousel'
import { useRouter } from 'next/router'
import styles from '../../styles/Components/Room.module.scss'
import useFetchRoom from '../../hooks/useFetchRoom'
import Link from 'next/link'
const aboutRoom = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae blandit dignissim nullam quis lorem duis sollicitudin. Proin eget ipsum facilisi justo, pharetra, porttitor. Semper nunc id mi etiam scelerisque dolor proin aliquam. Et vulputate commodo sit enim amet gravida.'
const services = ['Servicio 1', 'Servicio 2', 'Servicio 3', 'Servicio 4']
const hostName = '{host}'

const Room = () => {
  const router = useRouter()
  const { room } = router.query
  console.log(room)
  const { data, loading } = useFetchRoom(room)
  console.log(data)

  return (
    <>
      {loading ? <h1>Cargando</h1> : (
        <>
          <Carousel />
          <section className={styles.containerDetails}>
            <article className={styles.infoRoom}>
              <h2>${data.price} MXN  en {data.location}</h2>
              <h2>Sobre la habitación</h2>
              <p>{data.description}</p>
              <h2>Servicios</h2>
              <ul>
                {services.map((item, index) => (
                  <li key={index}>{ item }</li>
                ))}
              </ul>
              <h2>Sobre la ubicación</h2>
              <p>{aboutRoom}</p>
            </article>
            <article className={styles.infoHost}>
              <h2>{hostName}</h2>
              <img
                className={styles.photoHost}
                src={data.Perfil[0]}
                alt="Photo host"
              />
              <Link href={`/profile/${hostName}`}>
                <button>Ir al perfil</button>
              </Link>
            </article>
          </section>
        </>
      )}
    </>
  )
}

export default Room
