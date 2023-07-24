import BodyTitle from "../components/BodyTitle"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Text from '../components/Text'


const QueroDoar = () => {
  return (
   <>
    <Header />
    <div>
        <BodyTitle title="Quero Doar" />
        <Text text="Preencha o formulário abaixo para registrar seus dados e os itens que deseja doar." />
    </div>
    <Footer />
   </>
  )
}

export default QueroDoar