import fotoGio from '../../assets/imagens/fotoGio.png'
import Header from '../../components/Header'
import styles from './Sobre.module.css'

function Sobre () {
    return (
    <>
        <Header />
        <h1 className={styles.h1sobre}>Sobre Mim</h1>
        <div className={styles.cont}>
            <div className={styles.container}>
                <img src={fotoGio} alt="" />
                <p className={styles.text}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni voluptatem expedita, illo eos provident, quae ad facere, nemo dolor consequatur laboriosam aperiam ab facilis tempora beatae est voluptas atque sequi?
                </p>
            </div>
        </div>
    </>
    )
}

export default Sobre