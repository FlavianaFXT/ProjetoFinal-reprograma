import {Link} from 'react-dom'
import BodyTitle from "../components/BodyTitle"
import Header from "../components/Header"
import Img from "../components/Img"
import imgDonation from '../assets/doacoes.png'
import Footer from "../components/Footer"
import styles from '../styles/pages/doacoes.module.css'



const Doacoes = () => {
  return (
    <>
      <Header />
      <body className={styles.donationsBody}>
        <BodyTitle title="Doações"/>
        <div className={styles.bodyItens}>
          <Img src={imgDonation} alt="mão ofertando um coração"/>
          <div className={styles.navLinks}>
            <nav className={styles.links} >
              <Link to='/querodoar'>
                  <h3>QUERO DOAR</h3>
              </Link>
            </nav>
            <nav className={styles.links}>
              <Link to='/querodoacoes'>
                  <h3>QUERO DOAÇÕES</h3>
              </Link>
            </nav>
          </div>
         
        </div>
      </body>
      <Footer />
    </>
  )
}

export default Doacoes