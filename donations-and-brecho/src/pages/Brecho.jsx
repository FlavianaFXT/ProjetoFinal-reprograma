import Footer from "../components/Footer"
import Header from "../components/Header"
import Img from "../components/Img"
import Subtitle from "../components/Subtitle"
import styles from '../styles/pages/brecho.module.css'

const Brecho = () => {
  return (
    <>
      <Header />
      <body>
        <div className={styles.brechoLineContainer}>
          <div className={styles.searchBrecho}>
            <input type="text" value="" />
            <Img src="" alt="lupa de busca" />
          </div>
          <div className={styles.buttonsLineBrecho}>
            <a href=""><Img src="" alt="carrinho" /></a>
            <button>Login</button>
          </div>
        </div>
      </body>
      <div className={styles.localShopContainer}>
          <div className={styles.lateralBrechoBar}>
            <div>
              <Subtitle subtitle="Quer vender?" />
              <button>Cadastre seu Produto Aqui</button>
            </div>
            <div>
              <Subtitle subtitle="Busca por categorias" />
              <li>Roupas</li>
              <li>Calçados</li>
              <li>Acessórios</li>
            </div>
          </div>
          <div className={styles.shopBrechoArea}>
              <h1>PRODUTOS AQUI EM CARDS CRIADOS PARA ESSA SESSAO</h1>
          </div>
      </div>
      <Footer />
    </>
  )
}

export default Brecho