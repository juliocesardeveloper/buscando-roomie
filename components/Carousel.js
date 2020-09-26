import styles from '../styles/Carousel.module.scss'
const imagenes = [
  'https://cf.bstatic.com/images/hotel/max1024x768/238/238751575.jpg',
  'https://cf.bstatic.com/images/hotel/max1024x768/238/238751575.jpg',
  'https://cf.bstatic.com/images/hotel/max1024x768/238/238751575.jpg',
  'https://cf.bstatic.com/images/hotel/max1024x768/238/238751575.jpg',
  'https://cf.bstatic.com/images/hotel/max1024x768/238/238751575.jpg',
  'https://cf.bstatic.com/images/hotel/max1024x768/238/238751575.jpg',
  'https://cf.bstatic.com/images/hotel/max1024x768/238/238751575.jpg'
]
const Carousel = ({ images }) => {
  images.map(image => {
    console.log(image)
  })
  return (
    <div className={styles.container}>
      <ul>
        {imagenes.map((image, index) => {
          <li>
            <img
              src={`${image}`}
              alt={`imagen habitacion ${index}`}
              id={index}/>
          </li>
        })}
      </ul>
    </div>
  )
}

export default Carousel
