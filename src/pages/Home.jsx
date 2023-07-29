import Header from "../components/Header"
import Footer from "../components/Footer"
import styles from '../styles/pages/home.module.css'
import Img from '../components/Img'
import HomeIcon from '../assets/handshake.png'
import BodyTitle from "../components/BodyTitle"
import Subtitle from '../components/Subtitle'



const Home = () => {
  return (
  <>
    <Header />
    <body className={styles.bodyContainer}>
        <Img className={styles.bodyImg} src={HomeIcon} alt="mãos dadas em formato de coração"/>
    </body>
    <div className={styles.citacao}>
       <BodyTitle title="Tenho apenas duas mãos e o sentimento do mundo." />
       <Subtitle subtitle="(Carlos Drummond de Andrade)" />
    </div>
    <Footer />
  </>
  )
}

export default Home