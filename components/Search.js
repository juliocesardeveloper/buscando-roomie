// import { useMemo } from 'react'
// import { useForm } from '../hooks/useForm'
import styles from '../styles/Components/Search.module.scss'
// import Router, { useRouter } from 'next/router'

const Search = () => {
  // const router = useRouter()
  // const { q } = router.query
  // console.log(q)
  // const [formValues, handleInputChange] = useForm({
  //   searchText: q
  // })

  // const { searchText } = formValues

  // const getRoomsByLocation = (location = '') => {
  //   if (location === '') {
  //     return []
  //   }
  //   location = location.toLocaleLowerCase()
  //   return room.data.filter(room => room.data.location.toLocaleLowerCase().includes(location))
  // }

  // const roomsFiltered = useMemo(() => getRoomsByLocation(q), [q])

  // const handleSearch = (e) => {
  //   e.preventDefault()
  //   Router.push(`?q=${searchText}`)
  // }

  return (
    <>
      <form className={styles.search}>
        <input
          type="text"
          placeholder='Busca una habitación'
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
