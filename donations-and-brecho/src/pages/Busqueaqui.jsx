import Header from '../components/Header'
import Footer from '../components/Footer'
import BodyTitle from '../components/BodyTitle'
import Img from '../components/Img'
import Subtitle from '../components/Subtitle'
import styles from '../styles/pages/busqueaqui.module.css'
import lupa from '../assets/lupa-g.png'
import * as Icon from 'phosphor-react'
import Axios from 'axios'
import { useState, useEffect } from 'react'


const Busqueaqui = () => {
   const [inputValue, setInputValue] = useState('')
   const [endereco, setEndereco] = useState({})
   
   function handleChange(e){
      setInputValue(e.target.value)
   }

   useEffect(()=>{
      async function getAddress(){
         try{
            const response = await Axios.get('https://viacep.com.br/ws/{cep}/json/')
            setEndereco(response.data)
         }
         catch(erro){
            console.error("Erro capturado: " + erro)
            setEndereco({message: "Endereço não encontrado"})
         }
      }
      getAddress()
   }, [inputValue, endereco])

  return (
    <>
       <Header />
       <body className={styles.searchBody}>
          <BodyTitle title="Busque instituições próximas a você"/>
          <div className={styles.searchInput}>
            <input type="text" placeholder='Digite o seu CEP' onChange={handleChange}/>
            < Icon.MagnifyingGlass size={30} />
          </div>
          <Img src={lupa} alt="lupa de busca"/>
       </body>
       <div className={styles.searchResultsContainer}>
          <h1>RESULTADO DA BUSCA</h1>
      
         {endereco?
         <Subtitle subtitle={endereco.localidade}/>
         :
         <Subtitle subtitle="Endereço inexistente"/>}
          
       </div>
      <Footer />
    </>
 )
}

export default Busqueaqui