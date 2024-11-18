import Header from "../../components/Header"
import style from "./Artes.module.css"
import jjkimg from '../../assets/imagens/Artes Gio/51d89ba2-b80e-489e-9aed-e91a3e292cf5.jpeg'
import taylorimg from '../../assets/imagens/Artes Gio/408431927_917751166441485_3844895883845868827_n.jpg'
import { Link } from "react-router-dom"

function Artes () {
    return (
        <>
            < Header/>
            <div className={style.container}>
                <div className={style.containerimg}>
                    <div className={style.items}>
                            <Link to='jujutsu'>
                                <img src={jjkimg} alt="" />
                                <h2>Jujutsu</h2>
                            </Link>
                    </div>
                    <div className={style.items}>
                            <Link to = 'taylor'>
                                <img src={taylorimg} alt="" />
                                <h2>Taylor</h2>
                            </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Artes