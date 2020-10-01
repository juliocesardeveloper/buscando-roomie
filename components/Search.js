
import styles from '../styles/Components/Search.module.scss'

const cities = ['Baja California', 'Campeche', 'CDMX', 'Chiapas', 'Cuernavaca']

const Search = () => {
  return (
    <>
      <form className={styles.search}>
        <label>Escoge una ciudad:</label>
        <select className={styles.options} id="rooms" name="rooms">
          {cities.map((item, index) => (
            <option key={index}>{ item }</option>
          ))}
        </select>
        <button
          className={styles.searchIcon}
          type="submit">
          <img src='./searchIcon.svg' alt=""/>
        </button>
      </form>
    </>
  )
}

export default Search
