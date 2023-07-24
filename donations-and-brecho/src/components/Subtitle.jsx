import styles from '../styles/components/subtitle.module.css'

const Subtitle = ({subtitle}) => {
  return (
    <h3 className={styles.subtitle}>{subtitle}</h3>
  )
}

export default Subtitle