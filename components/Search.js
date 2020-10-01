
import styles from '../styles/Components/Search.module.scss'

const Search = () => {
  return (
    <>
      <form className={styles.search} >
        <input
          type="text"
          placeholder='Busca en una ciudad'
          // name="searchText"
          // autoComplete="off"
          // value={searchText}
          // onChange={handleInputChange}
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
