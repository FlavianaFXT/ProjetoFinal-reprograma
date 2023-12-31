import styles from '../styles/components/footer.module.css'
import Text from './Text'
import logoReprograma from '../assets/reprograma-fundos-claros.png'
import linkedinIcon from '../assets/in.png'
import githubIcon from '../assets/github.png'

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
        <div className={styles.desenvolvedContainer}>
            <Text text="Site desenvolvido por Flaviana Ferraz em  "/>
            <img className={styles.logoReprograma} src={logoReprograma} alt="logo reprograma" />
        </div>
        <div className={styles.redesContainer}>
            <Text text="Siga-me nas redes: "/>
            <a href="https://www.linkedin.com/in/flaviana-ferraz-frontend/" target='_blank' rel='noreferrer'>
                <img className={styles.redesIcons} src={linkedinIcon} alt="logo linkedin" />
            </a>
            <a href="https://github.com/FlavianaFXT" target='_blank' rel='noreferrer'>
                <img className={styles.redesIcons} src={githubIcon} alt="logo github" />
            </a>
        </div>
    </div>
  )
}

export default Footer