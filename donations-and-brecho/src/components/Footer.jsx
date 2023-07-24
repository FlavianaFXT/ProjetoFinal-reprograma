import styles from '../styles/components/footer.module.css'
import Text from './Text'
import Img from './Img'

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
        <div className={styles.desenvolvedContainer}>
            <Text text="Site desenvolvido por Flaviana Ferraz em  "/>
            <Img src="" alt="logo reprograma" />
        </div>
        <div className={styles.redesContainer}>
            <Text text="Siga-me nas redes: "/>
            <a href="https://www.linkedin.com/in/flaviana-ferraz-frontend/">
                <Img src="" alt="logo linkedin" />
            </a>
            <a href="https://github.com/FlavianaFXT">
                <Img src="" alt="logo github" />
            </a>
        </div>
    </div>
  )
}

export default Footer