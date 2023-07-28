import BodyTitle from "../components/BodyTitle"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Img from "../components/Img"
import styles from '../styles/pages/faleconosco.module.css'
import contact from '../assets/contact.png'
import { useState } from "react"
import database from "../service/firebase"
import {ref, push, set } from 'firebase/database'

const Faleconosco = () => {
  const[name, setName] = useState('')
  const[email, setEmail] = useState('')
  const[mensage, setMensage] = useState('')

  function handleInputName(e){
      setName(e.target.value)
  }

  function handleInputEmail(e){
      setEmail(e.target.value)
  }

  function handleInputMensage(e){
      setMensage(e.target.value)
  }


  function handleSubmit(e){
    e.preventDefault()

    const messageListRef = ref(database, 'mensagens')
    const newMessageRef = push(messageListRef)

    set(newMessageRef, {
      nome: name,
      email: email,
      texto: mensage
    }
    )
    setName('')
    setEmail('')
    setMensage('')
  }
  

  return (
  <>
    <Header />
    <body className={styles.contactBody}>
        <BodyTitle title="Entre em contato conosco"/>
        <Img className={styles.imgBody} src={contact} alt="imagem"/>
    </body>
    <main className={styles.formContainer}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input className={styles.formInput}
          type="text"
          placeholder="Digite seu nome"
          onChange={handleInputName}
          value={name} 
          />
        <input className={styles.formInput}
          type="email"
          placeholder="Digite seu email"
          onChange={handleInputEmail}
          value={email} 
          />
        <textarea className={styles.formInput}
          placeholder="Digite sua mensagem"
          onChange={handleInputMensage}
          value={mensage} 
          />
        <button className={styles.formButton} type="submit">ENVIAR</button>
      </form>
      
    </main>
   
    <Footer />
  </>
  )
}

export default Faleconosco