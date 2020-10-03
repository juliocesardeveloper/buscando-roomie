import Carousel from '../../components/Carousel'
import { useRouter } from 'next/router'
import styles from '../../styles/Components/Room.module.scss'
import useFetchRoom from '../../hooks/useFetchRoom'
import Link from 'next/link'
import PageLoading from '../../components/PageLoading'
const hostName = '{host}'

const Room = () => {
  const router = useRouter()
  const { room } = router.query
  const { data, loading } = useFetchRoom(room)

  return (
    <>
      {loading ? <PageLoading /> : (
        <>
          <Carousel />
          <section className={styles.containerDetails}>
            <article className={styles.infoRoom}>
              <h2>${data.price} MXN  en {data.location}</h2>
              <h2>Sobre la habitación</h2>
              <p>{data.description}</p>
              <h2>Servicios</h2>
              <ul>
                {data.wc ? <li><span><img src="/wc.png" alt="baño privado"/> Baño privado</span></li> : <></>}
                {data.Wifi ? <li><span><img src="/wifi.png" alt="Wifi"/> Wifi</span></li> : <></>}
                {data.Desayuno ? <li><span><img src="/breakfast.png" alt="Desayuno"/> Desayuno</span></li> : <></>}
                {data.Lavanderia ? <li><span><img src="/laundry.png" alt="Lavanderia"/> Lavanderia</span></li> : <></>}
                {data.Telefono ? <li><span><img src="/phone.png" alt="Teléfono"/> Teléfono</span></li> : <></>}
                {data.Tv ? <li><span><img src="/tv.png" alt="TV"/> TV</span></li> : <></>}
              </ul>
              <h2>Sobre la ubicación</h2>
              <p>{data.DescriptionLocal}</p>
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
