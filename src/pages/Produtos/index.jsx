import Header from "../../components/Header"
import style from './Produtos.module.css'
import React, {useState, useEffect} from "react"
import { FetchData,  } from "../../services/api"
import adswp from '../../assets/imagens/ProdutosWp/adesivos.png'
import bottonwp from '../../assets/imagens/ProdutosWp/Bottonswp.png'
import cadernowp from '../../assets/imagens/ProdutosWp/Cadernowp.png'
import ecowp from '../../assets/imagens/ProdutosWp/EcobagsWp.png'
import quadradoswp from '../../assets/imagens/ProdutosWp/Quadrinhowp.png'
import { Link } from "react-router-dom"

function Produtos_first () {

    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
          const data = await FetchData();
          setData(data);
        };
        fetchData();
      }, []);
  
    return (
        <>
        <Header/>
       <div className={style.container}>
            <div className={style.cont}>                     
                    <div className={style.imgContainer}>
                    <Link to = 'adesivos'>
                        <img src={adswp} alt="Adesivos" />
                        <h1>Adesivos</h1>
                    </Link>
                </div>
                <div className={style.imgContainer}>
                    <img src={bottonwp} alt="Bottons" />
                    <h1>Bottons</h1>
                </div>
                <div className={style.imgContainer}>
                    <img src={cadernowp} alt="Cadernos" />
                    <h1>Cadernos</h1>
                </div>
                <div className={style.imgContainer}>
                    <img src={ecowp} alt="Ecobags" />
                    <h1>Ecobags</h1>
                </div>
                <div className={style.imgContainer}>
                    <img src={quadradoswp} alt="Quadrinhos" />
                    <h1>Quadrinhos</h1>
                </div>
                <div className={style.imgContainer}>
                    <img src='' alt="Prints" />
                    <h1>Prints</h1>
                    </div>  
            </div>
        </div>   
        </>
    )
}

export default Produtos_first