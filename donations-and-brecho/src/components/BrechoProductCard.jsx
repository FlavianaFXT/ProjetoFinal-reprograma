import Img from "./Img"
import Subtitle from './Subtitle'
import Text from './Text'

import styles from '../styles/components/brechoproductcard.module.css'



const BrechoProductCard = ({src, title, text, subtitle}) => {
  return (
    <>
        <div className={styles.productCard}>
            <Img className={styles.imgProduct} src={src} alt="imagem do produto"/>
            <div className={styles.cardTextContainer}>
                <h4>{title}</h4>
                <Text text={text}/>
                <Subtitle subtitle={subtitle}/>
            </div>
            <div className={styles.buttons}>
                <button>Detalhes</button>
                <button>Comprar</button>
            </div>
        </div>
    </>
  )
}

export default BrechoProductCard