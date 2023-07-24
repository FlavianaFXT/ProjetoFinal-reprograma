import BodyTitle from "../components/BodyTitle"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Img from "../components/Img"
import styles from '../styles/pages/faleconosco.module.css'
import contact from '../assets/contact.png'

const Faleconosco = () => {
  return (
    <>
    <Header />
    <body className={styles.contactBody}>
        <BodyTitle title="Entre em contato conosco"/>
        <Img src={contact} alt="imagem"/>
    </body>
    <main className={styles.formContainer}>
      <form className={styles.form} onSubmit = {()=>{}}>
        <input className={styles.formInput}
        type="text"
        placeholder="Digite seu nome"
        onChange={()=>{}}
        value="" />
        <input className={styles.formInput}
        type="email"
        placeholder="Digite seu email"
        onChange={()=>{}}
        value="" />
        <input className={styles.formInput}
        placeholder="Digite sua mensagem"
        onChange={()=>{}}
        value="" />
      </form>
      <button className={styles.formButton} type="submit">ENVIAR</button>
    </main>
   
    <Footer />
</>
  )
}

export default Faleconosco