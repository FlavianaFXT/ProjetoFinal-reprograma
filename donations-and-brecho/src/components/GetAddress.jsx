import { useState } from "react"
import Axios from 'axios'
import * as Icon from 'phosphor-react'
import Text from "./Text"
import styles from '../styles/components/getaddress.module.css'


const GetAddress = () => {
    const [endereco, setEndereco] = useState({}) 
    const [inputValue, setInputValue] = useState("")

    const handleChange = (e) => {setInputValue(e.target.value)}

    async () => {
        try {
            const response = await Axios.get(`https://viacep.com.br/ws/${inputValue}/json/`)
            setEndereco(response.data)
            }
        catch(err) {
            console.error("Erro capturado: " + err)
        } 
    }

    
     return(
        <>
            <div className={styles.searchInput}>
                <input type="text" placeholder='Digite o seu CEP' 
                onChange={handleChange} 
                />
                < Icon.MagnifyingGlass size={30} />
            </div>
            <div>
                <Text content={endereco.cep} />
                <Text content={endereco.logradouro} />
                <Text content={endereco.bairro} />
                <Text content={endereco.localidade} />
                <Text content={endereco.uf} />
            </div>
        </>
     ) 
}           
 
       
    export default GetAddress