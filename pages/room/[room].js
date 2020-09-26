import { useRouter } from 'next/router'

const Room = () => {
  const router = useRouter()
  const { room } = router.query

  return <p>Room: {room}</p>
}

export default Room
