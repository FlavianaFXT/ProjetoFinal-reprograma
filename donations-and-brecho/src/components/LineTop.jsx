
import Title from "./Title"
import styles from '../styles/components/linetop.module.css'
import logo from '../assets/clothing-rack_5395996.png'

const LineTop = () => {
  return (
    <div className={styles.linetopContainer}>
        <img className={styles.logoSite} src={logo} alt="logo site" />
        <Title title="Doações e Brechó"/>
    </div>
  )
}

export default LineTop