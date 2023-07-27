
import BrechoProductsCards from "../components/BrechoProductsCards"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Subtitle from "../components/Subtitle"
import styles from '../styles/pages/brecho.module.css'
import * as Icon from 'phosphor-react'

const Brecho = () => {
  return (
    <>
      <Header />
      <body>
        <div className={styles.brechoLineContainer}>
          <div className={styles.searchBrecho}>
            <input type="text" value="" />
            < Icon.MagnifyingGlass size={30} />
          </div>
          <div className={styles.buttonsLineBrecho}>
            <a href=""><Icon.ShoppingCart size={30}/></a>
            <button className={styles.loginButton}>Login</button>
          </div>
        </div>
      </body>
      <main className={styles.localShopContainer}>
          <div className={styles.lateralBrechoBar}>
              <div>
                <Subtitle subtitle="Quer vender?" />
                <button>Cadastre seu Produto Aqui</button>
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
          <div className={styles.shopBrechoArea}>
            <BrechoProductsCards />
          </div>
      </main>
      <Footer />
    </>
  )
}

export default Brecho