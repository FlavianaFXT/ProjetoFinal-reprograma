import Img from "./Img"
import Subtitle from "./Subtitle"
import Text from "./Text"
import styles from '../styles/components/card.module.css'

const Card = () => {
  return (
    <div className={styles.cardContainer}>
        <Img src="" alt="icone"/>
        <Subtitle subtitle="titulo do card"/>
        <Text text= "texto do card" />
    </div>
  )
}

export default Card