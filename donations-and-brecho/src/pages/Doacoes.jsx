import BodyTitle from "../components/BodyTitle"
import Header from "../components/Header"
import Img from "../components/Img"
import imgDonation from '../assets/doacoes.png'
import Footer from "../components/Footer"
import styles from '../styles/pages/doacoes.module.css'
import Subtitle from "../components/Subtitle"
import QueroDoar from './QueroDoar'


const Doacoes = () => {
  return (
    <>
      <Header />
      <body className={styles.donationsBody}>
        <BodyTitle title="Doações"/>
        <div className={styles.bodyItens}>
          <button className={styles.links} onClick={QueroDoar}>
              <Img src="" alt="icone"/>
              <Subtitle subtitle="Quero doar" />
          </button>
          <Img src={imgDonation} alt=""/>
          <button className={styles.links}>
              <Img src="" alt="icone"/>
              <Subtitle subtitle="Quero doações" />
          </button>
        </div>
      </body>
      <Footer />
    </>
  )
}

export default Doacoes