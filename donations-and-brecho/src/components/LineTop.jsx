import Img from "./Img"
import Title from "./Title"
import styles from '../styles/components/linetop.module.css'

const LineTop = () => {
  return (
    <div className={styles.linetopContainer}>
        <Img src="" alt="logo site" />
        <Title title="Doações e Brechó"/>
    </div>
  )
}

export default LineTop