
import Room from '../styles/Components/SearchRoom.module.scss'
import Card from './Card.js'

function SearchRoom () {
  return (
    <div className={Room['results-container']}>
      <Card
        images={
          'https://cf.bstatic.com/images/hotel/max1024x768/213/213503501.jpg'
        }
        price={'100.000'}
        location={'Medellín'}
      />
    </div>
  )
}

export default SearchRoom;
