import Header from '../components/Header'
import Footer from '../components/Footer'
import Img from '../components/Img'
import imgSobre from '../assets/people.png'
import styles from '../styles/pages/sobre.module.css'
import BodyTitle from '../components/BodyTitle'
import Card from '../components/Card'
import * as Icon from 'phosphor-react'


const Sobre = () => {
  return (
    <>
      <Header />
      <body className={styles.bodyContainer}>
        <BodyTitle title="Sobre Nós" />
        <Img src={imgSobre} alt="desenho de pessoas"/>
      </body>
      <div className={styles.cardsContainer}>
        <Card 
        icon = {<Icon.UsersThree  size={150} color="#686AAC" weight="thin"/>}
        subtitle="Sobre Nós" 
        text="Somos uma Organização sem fins lucrativos que busca auxiliar a comunidade em geral a ajudar quem precisa."/>
        <Card 
        icon = {<Icon.Target size={150} color="#686AAC" weight="thin"/>}
        subtitle="Missão"
        text="Levar doações a quem precisa de forma mais simples e rápida e incentivar o uso de roupas até seu esgotamento, favorecendo também o meio ambiente"
        />
        <Card 
        icon = {<Icon.FileSearch size={150} color="#686AAC" weight="thin" />}
        subtitle="O que você encontra aqui?"
        text="Como ajudar, quais as instituições mais proximas de você e um brechó para comprar umas peças caso você possa comprar de quem está precisando vender."
        />
      </div>
      <Footer />
    </>
  )
}

export default Sobre