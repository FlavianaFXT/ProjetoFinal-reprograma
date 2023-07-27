import BodyTitle from "../components/BodyTitle"
import Footer from "../components/Footer"
import Header from "../components/Header"
import styles from '../styles/pages/querodoacoes.module.css'
import Subtitle from "../components/Subtitle"
import DonationsProductsCards from "../components/DonationsProductsCards"
import * as Icon from 'phosphor-react'

const QueroDoacoes = () => {
  return (
    <>
      <Header />
      <body className={styles.wantDonationBody}>         
          <div className={styles.buttonsLineWantDonations}>
            <a href=""><Icon.ShoppingCart size={30} /></a>
            <button className={styles.loginButton}>Login</button>
          </div>
          <BodyTitle title="Quero Doações" />
      </body>
      <main className={styles.donationsArea}>
        <div className={styles.lateralDonationsBar}>
          <div>
            <Subtitle subtitle="É uma instituição e quer receber doações?" />
            <button>Cadastre-se Aqui</button>
          </div>
          <div>
            <Subtitle subtitle="Busca por categorias" />
            <a href=""><li>Roupas</li></a>
            <a href=""><li>Calçados</li></a>
            <a href=""> <li>Acessórios</li></a>
            <a href=""><li>Masculino</li></a>
            <a href=""><li>Feminino</li></a>
            <a href=""><li>Infantil</li></a>
          </div>
        </div>
        <div className={styles.colectDonationsArea}>
          <DonationsProductsCards />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default QueroDoacoes