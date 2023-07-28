import instituicoes from "../data/instituicoes"
import Text from "./Text"
import styles from '../styles/components/cardinstitucion.module.css'

const GetInstitucions = () => {
  return (
        <div>
           {instituicoes.map((instituicao)=>{
              return(
                 <div key={instituicao.nome} className={styles.cardInstitucion}>
                    <Text text={instituicao.nome}/>
                    <Text text={instituicao.cidade}/>
                    <Text text={instituicao.cep}/>
                    <Text text={instituicao.endereco}/>
                    <Text text={instituicao.telefone}/>
                    <Text text={instituicao.site}/>
                 </div>
              )
           })}
        </div>
     )
}

export default GetInstitucions