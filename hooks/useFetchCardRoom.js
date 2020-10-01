import { useState, useEffect } from 'react'
import axios from 'axios'

const useFetchCardRoom = () => {
  const [room, setRoom] = useState([])

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const result = await axios.get('http://localhost:8080/api/rooms')
        setRoom(result.data.data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchRoom()
  }, [])

  return { room }
}
export default useFetchCardRoom
