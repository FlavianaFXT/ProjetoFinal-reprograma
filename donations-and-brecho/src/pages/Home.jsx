import Header from "../components/Header"
import Footer from "../components/Footer"
import styles from '../styles/pages/home.module.css'
import Img from '../components/Img'
import HomeIcon from '../assets/handshake.png'
import Text from '../components/Text'


const Home = () => {
  return (
  <>
    <Header />
    <body className={styles.bodyContainer}>
        <Img src={HomeIcon} alt="mãos dadas em formato de coração"/>
    </body>
    <Text text="Tenho apenas duas mãos e o sentimento do mundo. (Carlos Drummond de Andrade)" />
    <Footer />
  </>
  )
}

export default Home