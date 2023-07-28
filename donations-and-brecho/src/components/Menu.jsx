import { Link } from 'react-dom'
import styles from '../styles/components/menu.module.css'

const Menu = () => {
    return(
        <nav className={styles.menuContainer}>
            <li><Link className={styles.link} to='/'>Home</Link></li>
            <li><Link className={styles.link} to='/sobre'>Sobre</Link></li>
            <li><Link className={styles.link} to='/doacoes'>Doações</Link></li>
            <li><Link className={styles.link} to='/brecho'>Brechó</Link></li>
            <li><Link className={styles.link} to='/busqueaqui'>Busque aqui</Link></li>
            <li><Link className={styles.link} to='/faleconosco'>Fale conosco</Link></li>
        </nav>
    )
}

export default Menu
