import Header from '../../components/Header'
import Footer from '../../components/Footer'
import imgeventos from '../../assets/imagens/imgeventos.png'
import soninho from '../../assets/imagens/soninho.png'
import './Home.module.css'
import { Link } from 'react-router-dom'
import style from './Home.module.css'
function Home() {
  return (
    <>
      <Header />
      <div className={style.container}>
        <div className={style.containerImg}>
        <Link to='eventos'><img src={imgeventos} alt="Eventos" />
          <h2 className={style.menuName}>Eventos</h2></Link>
        </div>
        <div className={style.containerImg}>

            <Link to='Sobre'>
              <img src={soninho} alt="Eventos" />
              <h2 className={style.menuName}>Sobre</h2>
            </Link>

        </div>
        <div className={style.containerImg}>
          <Link to='produtos'>
            <img src={soninho} alt="Eventos" />
            <h2 className={style.menuName}>Produtos</h2>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home
