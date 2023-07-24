import styles from '../styles/components/bodytitle.module.css'

const BodyTitle = ({title}) => {
  return (
    <h2 className={styles.bodyTitle}>{title}</h2>
  )
}

export default BodyTitle