import Card from '../components/Card'

import styles from '../styles/Components/Search.module.scss'

import { useFilter } from '../hooks/useFilter'
// import { useRouter } from 'next/router'
import { getRoomsByCity } from '../selectors/getRoomsByCity'

const cities = ['', 'Campeche', 'CDMX', 'Chiapas', 'Cuernavaca', 'Puebla']

const Search = () => {
  // const router = useRouter()
  const [formValues, handleInputChange] = useFilter({
    searchText: ''
  })

  const { searchText } = formValues

  const roomsFiltered = getRoomsByCity(searchText)

  return (
    <>
      <form className={styles.search}>
        <label>Escoge una ciudad:</label>
        <select className={styles.options} id="cities" name="searchText" value={searchText} onChange={handleInputChange}>
          {cities.map((item, index) => (
            <option key={index}>{ item }</option>
          ))}
        </select>
      </form>
      {
        roomsFiltered.map((item) => (
          <Card key={item.id} {...item} />
        ))
      }
    </>
  )
}

export default Search
