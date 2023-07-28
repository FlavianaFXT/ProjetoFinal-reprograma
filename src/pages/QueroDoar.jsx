import BodyTitle from "../components/BodyTitle"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Subtitle from "../components/Subtitle"
import styles from '../styles/pages/querodoar.module.css'
import Img from "../components/Img"
import InputForms from "../components/InputForms"
import clip from '../assets/clip.png'
import maosdoando from '../assets/give-love.png'


const QueroDoar = () => {
  return (
   <>
    <Header />
    <body className={styles.wantDonationBody}>
        <BodyTitle title="Quero Doar" />
        <Img  className={styles.imgBody} src={maosdoando} alt="mãos entregando um coração" />
    </body>
    <main className={styles.formContainer}>
      <Subtitle subtitle="Preencha o formulário abaixo para registrar seus dados e os itens que deseja doar." />
      <form className={styles.form} onSubmit = {()=>{}}>
        <InputForms 
        type="text"
        placeholder="Digite seu nome"
        onChange={()=>{}}/>

        <InputForms
        type="email"
        placeholder="Digite seu email"
        onChange={()=>{}}
        />

        <InputForms
        type="number"
        placeholder="Digite seu telefone no formato (99) 99999-9999"
        onChange={()=>{}} />

        <InputForms
          type="text"
          placeholder="Qual produto você deseja doar?(ex:blusa, calça, etc)"
          onChange={()=>{}} />

        <InputForms
        type="text"
        placeholder="Tamanho (P,M,G,38,40,42,...)" 
        onChange={()=>{}} />

        <InputForms
        placeholder="Descreva o produto"
        onChange={()=>{}} />

        <div className={styles.attachContainer}>
          <a href="">
            <Img className={styles.clip} src={clip} alt='icone de clipe'/>
          </a>
          <Subtitle subtitle="Anexar Imagem" />
        </div>
        <button className={styles.formButton} type="submit">ENVIAR</button>
      </form>
      
    </main>
    <Footer />
   </>
  )
}

export default QueroDoar