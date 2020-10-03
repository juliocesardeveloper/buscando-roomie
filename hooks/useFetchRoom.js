import { useState, useEffect } from 'react'
import axios from 'axios'

const useFetchRoom = (roomId) => {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState('true')

  useEffect(() => {
    if (roomId) {
      const fetchRoom = async () => {
        setLoading(true)
        try {
          const result = await axios.get(`http://localhost:8080/api/rooms/${roomId}`)
          setData(result.data.data)
          setLoading(false)
        } catch (error) {
          console.log(error)
          setLoading(false)
        }
      }
      fetchRoom()
    }
  }, [])

  return { data, loading }
}
export default useFetchRoom
