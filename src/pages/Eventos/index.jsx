import Header from "../../components/Header"
import eventos from '../../assets/imagens/imgeventos.png'
import styles from './Eventos.module.css'

function Eventos () {
    return (
        <>
        <Header/>
        <h1>Aque estao os Eventos que vou ir ou ja fui</h1>
        <div className={styles.container}>
            <img src={eventos} alt="" />
            <img src={eventos} alt="" />
        </div>
        </>
    )
}
export default Eventos 