import styles from './CarDetails.module.css'

const CarDetails = ({id, brand, color, newCar, km}) => {
  return (
    <div key={id} className={styles.card_car}>
        <h2>{brand}</h2>
        <p>Cor: {color}</p>
        <p>KM: {km}</p>
        {newCar ? 
        (
            <p className={styles.new_car}>O carro é ZERO</p>
        ) : 
        (
            <p className={styles.used_car}>Carro USADO</p>
        )}
    </div>
  )
}

export default CarDetails