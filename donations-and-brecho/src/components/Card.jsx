import Subtitle from "./Subtitle"
import Text from "./Text"
import styles from '../styles/components/card.module.css'

const Card = ({icon, subtitle, text}) => {
  return (
    <div className={styles.cardContainer}>
        {icon}
        <div className={styles.textContainer}>
          <Subtitle subtitle={subtitle}/>
          <Text text= {text} />
        </div>
        
    </div>
  )
}

export default Card