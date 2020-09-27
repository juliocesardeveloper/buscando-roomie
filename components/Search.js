import styles from '../styles/Components/Search.module.scss'

const Search = () => {
  return (
    <>
      <form className={styles.search} action="">
        <input
          type="search"
          placeholder='Busca una habitación'
        />
        <button className={styles.searchIcon} type="submit"><img src='./searchIcon.svg' alt=""/></button>
      </form>
    </>
  )
}

export default Search
