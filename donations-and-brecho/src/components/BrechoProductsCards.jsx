import BrechoProductCard from './BrechoProductCard'
import sandfem from '../assets/brecho-products/sand-salto-fem-rosa.jpg'
import vestfeminf from '../assets/brecho-products/vest-inf-festa-rosa.jpg'
import sapmocad from '../assets/brecho-products/sap-fem-mocassim-preto.jpg'
import vestfest from '../assets/brecho-products/vest-festa-tubinho-renda.jpg'
import bolsa from '../assets/brecho-products/bolsa-fem-peq-azul.jpg'
import blazer from '../assets/brecho-products/blazer-fem-rosa.png'
import cropped from '../assets/brecho-products/cropped-fem-marinho.jpg'
import sapbranco from '../assets/brecho-products/sap-fem-branco.jpg'

const BrechoProductsCards = () => {
  return (
    <>
        <BrechoProductCard 
        src={sandfem} 
        title ="Sandalia de salto feminina" 
        subtitle=" R$ 40,00 "
        text="Sandalia de salto grosso feminina, na cor rosa, Tam: 36" />
           
        <BrechoProductCard
        src={vestfeminf}
        title ="Vestido Festa infantil" 
        subtitle=" R$ 50,00 " 
        text="Vestido infantil festa na cor Rosa, tam: 3 anos " />

        <BrechoProductCard 
        src={sapmocad} 
        title ="Sapato Mocassim" 
        subtitle=" R$ 30,00" 
        text="Sapato Mocassim feminino preto, tam: 38" />
           
        <BrechoProductCard
        src={vestfest}
        title ="Vestido Festa Renda" 
        subtitle=" R$ 60,00" 
        text="Vestido de festa em renda, azul, tam: 42 "/>

        <BrechoProductCard 
        src={bolsa} 
        title ="Bolsa feminina" 
        subtitle=" R$ 20,00" 
        text="Bolsa feminina pequena, na cor azul" />
           
        <BrechoProductCard
        src={blazer}
        title ="Blazer Feminino" 
        subtitle=" R$ 40,00" 
        text="Blazer feminino na cor rosa, tam: 40"/>

        <BrechoProductCard 
        src={cropped} 
        title ="Cropped Feminino" 
        subtitle=" R$ 25,00" 
        text="Cropped feminino na cor marinho, tam: G" />
           
        <BrechoProductCard
        src={sapbranco}
        title ="Sapato Feminino Confortável" 
        text="R$ 35,00" 
        subtitle="Sapato Femino branco rasteiro confortável, tam: 35" />

    </>
    
  )
}

export default BrechoProductsCards