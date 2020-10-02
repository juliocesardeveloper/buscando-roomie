import { useState, useEffect } from 'react'
import axios from 'axios'

const useFetchProfile = (profileId) => {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState('true')

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true)
      try {
        const result = await axios.get(`http://localhost:8080/api/perfiles/${profileId}`)
        setData(result.data.data)
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }

    fetchProfile()
  }, [])

  return { data, loading }
}
export default useFetchProfile
