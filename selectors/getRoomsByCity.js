import { useRouter } from 'next/router'
import useFetchCardRoom from '../hooks/useFetchCardRoom'

export const getRoomsByCity = (city = '') => {
  const router = useRouter()
  const { rooms } = router.query
  const { room } = useFetchCardRoom(rooms)
  if (city === '') {
    return []
  }
  return room.filter(habitacion => habitacion.location.includes(city))
}
