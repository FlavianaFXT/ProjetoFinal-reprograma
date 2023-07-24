import Subtitle from "./Subtitle"
import Text from "./Text"
import styles from '../styles/components/brechoproductcard.module.css'
import roupa from '../assets/casaco.jpg'
import sapato from '../assets/sapato menina.jpg'
import ImgProducts from "./ImgProducts"

const BrechoProductsCards = () => {
  return (
    <>
    <div className={styles.productCard}>
        <ImgProducts src={roupa} alt="imagem do produto"/>
        <div className={styles.cardTextContainer}>
            <Subtitle subtitle="Nome da peça"/>
            <Text text="descrição da peça"/>
            <Subtitle subtitle="Valor em reais"/>
        </div>
        <div className={styles.buttons}>
              <button>Detalhes</button>
              <button>Comprar</button>
        </div>
    </div>
           
    <div className={styles.productCard}>
        <ImgProducts src={sapato} alt="imagem do produto"/>
        <div className={styles.cardTextContainer}>
            <Subtitle subtitle="Nome da peça"/>
            <Text text="descrição da peça"/>
            <Subtitle subtitle="Valor em reais"/>
        </div>
        <div className={styles.buttons}>
              <button>Detalhes</button>
              <button>Comprar</button>
        </div>
    </div>

    <div className={styles.productCard}>
        <ImgProducts src={roupa} alt="imagem do produto"/>
        <div className={styles.cardTextContainer}>
            <Subtitle subtitle="Nome da peça"/>
            <Text text="descrição da peça"/>
            <Subtitle subtitle="Valor em reais"/>
        </div>
        <div className={styles.buttons}>
              <button>Detalhes</button>
              <button>Comprar</button>
        </div>
    </div>

    <div className={styles.productCard}>
        <ImgProducts src={sapato} alt="imagem do produto"/>
        <div className={styles.cardTextContainer}>
            <Subtitle subtitle="Nome da peça"/>
            <Text text="descrição da peça"/>
            <Subtitle subtitle="Valor em reais"/>
        </div>
        <div className={styles.buttons}>
            <button>Detalhes</button>
            <button>Comprar</button>
        </div>
    </div>
           
    <div className={styles.productCard}>
        <ImgProducts src={roupa} alt="imagem do produto"/>
        <div className={styles.cardTextContainer}>
            <Subtitle subtitle="Nome da peça"/>
            <Text text="descrição da peça"/>
            <Subtitle subtitle="Valor em reais"/>
        </div>
        <div className={styles.buttons}>
            <button>Detalhes</button>
            <button>Comprar</button>
        </div>
    </div>

    <div className={styles.productCard}>
        <ImgProducts src={sapato} alt="imagem do produto"/>
        <div className={styles.cardTextContainer}>
            <Subtitle subtitle="Nome da peça"/>
            <Text text="descrição da peça"/>
            <Subtitle subtitle="Valor em reais"/>
        </div>
        <div className={styles.buttons}>
              <button>Detalhes</button>
              <button>Comprar</button>
        </div>
    </div>

    <div className={styles.productCard}>
        <ImgProducts src={roupa} alt="imagem do produto"/>
        <div className={styles.cardTextContainer}>
            <Subtitle subtitle="Nome da peça"/>
            <Text text="descrição da peça"/>
            <Subtitle subtitle="Valor em reais"/>
        </div>
        <div className={styles.buttons}>
              <button>Detalhes</button>
              <button>Comprar</button>
        </div>
    </div>

    <div className={styles.productCard}>
        <ImgProducts src={sapato} alt="imagem do produto"/>
        <div className={styles.cardTextContainer}>
            <Subtitle subtitle="Nome da peça"/>
            <Text text="descrição da peça"/>
            <Subtitle subtitle="Valor em reais"/>
        </div>
        <div className={styles.buttons}>
              <button>Detalhes</button>
              <button>Comprar</button>
        </div>
    </div>
    </>
    
  )
}

export default BrechoProductsCards