import styles from '../styles/components/imgproducts.module.css'

const ImgProducts = ({src, alt}) => {
  return (
   <img className={styles.imgProducts} src={src} alt={alt} />
  )
}

export default ImgProducts