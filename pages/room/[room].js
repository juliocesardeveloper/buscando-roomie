import Header from '../../components/Header'
import Carousel from '../../components/Carousel'
import { useRouter } from 'next/router'
import styles from '../../styles/Components/Room.module.scss'

const Room = () => {
  const router = useRouter()
  const { room } = router.query

  return (
    <>
      {/* <Header /> */}
      <Carousel />
      {/* <p>Room: {room}</p> */}
    </>
  )
}

export default Room
