import styles from '../styles/Components/Search.module.scss'
import { useFilter } from '../hooks/useFilter'
import { useRouter } from 'next/router'

const cities = ['Baja California', 'Campeche', 'CDMX', 'Chiapas', 'Cuernavaca']

const Search = () => {
  const router = useRouter()
  const [formValues, handleInputChange] = useFilter({
    searchText: ''
  })

  const { searchText } = formValues

  const handleFilter = (e) => {
    e.preventDefault()
    router.push(`?q=${searchText}`)
  }

  return (
    <>
      <form onSubmit={handleFilter} className={styles.search}>
        <label>Escoge una ciudad:</label>
        <select className={styles.options} id="cities" name="searchText" value={searchText} onChange={handleInputChange}>
          {cities.map((item, index) => (
            <option key={index}>{ item }</option>
          ))}
        </select>
        <button
          className={styles.searchIcon}
          type="submit"
        >
          <img src='./searchIcon.svg' alt=""/>
        </button>
      </form>
    </>
  )
}

export default Search
