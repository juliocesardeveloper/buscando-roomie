
import styles from '../styles/Components/Search.module.scss'

const Search = () => {
  return (
    <>
      <form className={styles.search} >
        <input
          placeholder='Busca una habitación'
          type="text"
        />
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
