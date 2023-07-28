import Img from "./Img"
import Subtitle from "./Subtitle"
import Text from './Text'

import styles from '../styles/components/donationproductcard.module.css'

const DonationProductCard = ({src, title, subtitle, text}) => {
  return (
    <>
        <div className={styles.productCard}>
            <Img className={styles.imgProduct} src={src} alt="imagem do produto"/>
            <div className={styles.cardTextContainer}>
                <h3>{title}</h3>
                <h4>{subtitle}</h4>
                <Text text={text}/>
            </div>
            <div className={styles.buttons}>
                <button>Detalhes</button>
                <button>Coletar</button>
            </div>
        </div>
    </>
  )
}

export default DonationProductCard