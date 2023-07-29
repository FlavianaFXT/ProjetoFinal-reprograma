import Header from '../components/Header'
import Footer from '../components/Footer'
import BodyTitle from '../components/BodyTitle'
import Img from '../components/Img'
import styles from '../styles/pages/busqueaqui.module.css'
import lupa from '../assets/lupa-g.png'
import * as Icon from 'phosphor-react'
// import GetInstitucions from '../components/GetInstitucions'


const Busqueaqui = () => {

 
   function handleChange(e){
      e.target.value
    }


  return (
    <>
       <Header />
       <body className={styles.searchBody}>
          <BodyTitle title="Busque instituições próximas a você"/>
          <Img className={styles.bodyImg} src={lupa} alt="lupa de busca"/>
       </body>
       <div className={styles.searchResultsContainer}>
         <div className={styles.searchInput}>
            <input type="text" 
            placeholder='Digite seu CEP' 
            onChange={handleChange} 
            />
            < Icon.MagnifyingGlass size={25} />
         </div> 
         <div className={styles.institucionsContainer}>
            {/* <GetInstitucions /> */}
         </div>
       </div>
     
      <Footer />
    </>
 )
}

export default Busqueaqui