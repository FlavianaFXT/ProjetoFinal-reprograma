import Header from '../components/Header'
import Footer from '../components/Footer'
import BodyTitle from '../components/BodyTitle'
import Img from '../components/Img'
import styles from '../styles/pages/busqueaqui.module.css'
import lupa from '../assets/lupa-g.png'
import GetAddress from '../components/GetAddress'



const Busqueaqui = () => {

  return (
    <>
       <Header />
       <body className={styles.searchBody}>
          <BodyTitle title="Busque instituições próximas a você"/>
          <Img src={lupa} alt="lupa de busca"/>
       </body>
       <div className={styles.searchResultsContainer}>
          <h1>RESULTADO DA BUSCA</h1>
          <GetAddress />
       </div>
      <Footer />
    </>
 )
}

export default Busqueaqui