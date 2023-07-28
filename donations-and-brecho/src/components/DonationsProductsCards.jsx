import DonationProductCard from './DonationProductCard'
import roupa from '../assets/casaco.jpg'
import sapato from '../assets/sapato menina.jpg'
import conjmascinfan from '../assets/conj-mas-inf.jpg'
import vestfeminf from '../assets/vestido-fem-inf.jpg'
import blusafem from '../assets/blusa-fem-adulto.jpg'
import tenismasinf from '../assets/sapato-menino.jpg'
import sandfem from '../assets/sandalia-fem.jpg'
import cammasc from '../assets/camisa-masc-adulto.png'


const DonationsProductsCards = () => {
  return (
    <>
        <DonationProductCard
        src={roupa}
        title="Casaco"
        subtitle= "Tamanho: M"
        text="Casaco de frio em flanela. Unissex"
        />

        <DonationProductCard
        src={sapato}
        title="Sapato Infantil"
        subtitle= "Tamanho: 23"
        text="Sapato infantil dourado - Feminino"
        />

        <DonationProductCard
        src={conjmascinfan}
        title= "Conjunto Masculino Infantil"
        subtitle="Tamanho: 4 anos"
        text="Conjunto masculino em algodão."
        />

        <DonationProductCard
        src={vestfeminf}
        title= "Vestido Feminino Infantil"
        subtitle="Tamanho: 5 anos"
        text="Vestido estampado de flores em algodão."
        />

        <DonationProductCard
        src={blusafem}
        title= "Blusa Feminina"
        subtitle="Tamanho: G"
        text="Blusa feminina adulto em malha na cor vermelha."
        />

        <DonationProductCard
        src={tenismasinf}
        title= "Tenis Masculino Infantil"
        subtitle="Tam: 30"
        text="Tenis Masculino Infantil na cor ---"
        />

        <DonationProductCard
        src={sandfem}
        title= "Sandalia Feminina"
        subtitle="Tamanho: 37"
        text="Sandalia rasteira feminina com fivelas"
        />

        <DonationProductCard
        src={cammasc}
        title= "Camisa Masculina Adulto"
        subtitle="Tamanho: P"
        text="Camisa masculina floral, algodão com botoes na frente."
        />
    </>
  )
}

export default DonationsProductsCards