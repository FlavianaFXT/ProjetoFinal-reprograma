import Header from '../components/Header'
import Footer from '../components/Footer'
import BodyTitle from '../components/BodyTitle'
import Img from '../components/Img'
import styles from '../styles/pages/busqueaqui.module.css'
import lupa from '../assets/lupa.png'

const Busqueaqui = () => {
  return (
    <>
       <Header />
       <body className={styles.searchBody}>
          <BodyTitle title="Busque instituições próximas a você"/>
          <div className={styles.searchInput}>
            <input type="text" placeholder='Digite o seu CEP'/>
            <Img src="" alt="lupa de busca" />
          </div>
          <Img src={lupa} alt="lupa de busca"/>
       </body>
       <div className={styles.searchResultsContainer}>
          <h1>RESULTADO BUSCAS AQUI</h1>
       </div>
      <Footer />
    </>
 )
}

export default Busqueaqui