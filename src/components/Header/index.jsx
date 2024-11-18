import { Link } from 'react-router-dom'
import logo from '../../assets/imagens/logo.png'
import logoinsta from '../../assets/imagens/logoinsta.svg'
import styles from './Header.module.css'

function Header() {
    
  return (
      <>
        <header>
          <nav className={styles.headerlinks}>
                <a href="https://www.instagram.com/gio.logyy/" target='_blank'><img src={logoinsta}/></a>
          </nav>
          <div className={styles.contImg}>
            <img src={logo} alt="Logo Loja Giologyy" />
            <h1>Giologyy</h1>
          </div>
        </header>
        <div>
          <nav className={styles.navContainer}>
            <ul className={styles.navItems}>
              <li className={styles.navLinks}>
                <Link to='/'>
                  <h2>Home</h2>
                </Link>
              </li>
              <li className={styles.navLinks}>
                <Link to={'/produtos'}>
                  <h2>Produtos</h2>
                </Link>
              </li>
              <li className={styles.navLinks}>
                <Link to={'/artes'}>
                  <h2>Artes</h2>
                </Link>
              </li>
              <li className={styles.navLinks}>
                <Link to='/sobre'>
                  <h2>Sobre</h2>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
    </>
    )
  }

  export default Header