import Header from '../components/Header'
import Footer from '../components/Footer'
import Img from '../components/Img'
import imgSobre from '../assets/doacoes.png'
import styles from '../styles/pages/sobre.module.css'
import BodyTitle from '../components/BodyTitle'
import Card from '../components/Card'

const Sobre = () => {
  return (
    <>
      <Header />
      <body className={styles.bodyContainer}>
        <BodyTitle title="Sobre Nós" />
        <Img src={imgSobre} alt=""/>
      </body>
      <div className={styles.cardsContainer}>
        <Card />
        <Card />
        <Card />
      </div>
      <Footer />
    </>
  )
}

export default Sobre