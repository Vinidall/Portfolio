import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Eventos from "./pages/Eventos";
import Sobre from "./pages/Sobre";
import Produtos_first from "./pages/Produtos";
import Artes from "./pages/Artes";
import Pagejjk from "./pages/Artes/Artespages/Jujutsu";
import Pagetaylor from "./pages/Artes/Artespages/Taylor";
import Adesivos from "./pages/Produtos/ProdutosPages/Adesivos/Alladesivos";
import Lol from "./pages/Produtos/ProdutosPages/Adesivos/Pages-adesivos/Lol";
import Adsvalorant from "./pages/Produtos/ProdutosPages/Adesivos/Pages-adesivos/Valorant";
import Adsfnaf from "./pages/Produtos/ProdutosPages/Adesivos/Pages-adesivos/Fnaf";
import Adspokemon from "./pages/Produtos/ProdutosPages/Adesivos/Pages-adesivos/Pokemon";
import Adsgenshin from "./pages/Produtos/ProdutosPages/Adesivos/Pages-adesivos/Genshin";
import Adsonepiece from "./pages/Produtos/ProdutosPages/Adesivos/Pages-adesivos/OnePiece";
import Adschainsaw from "./pages/Produtos/ProdutosPages/Adesivos/Pages-adesivos/ChainsawMan";
import Adsboku from "./pages/Produtos/ProdutosPages/Adesivos/Pages-adesivos/BokuNoHero";
import Adshaikyuu from "./pages/Produtos/ProdutosPages/Adesivos/Pages-adesivos/Haikyuu";
import Adsspy from "./pages/Produtos/ProdutosPages/Adesivos/Pages-adesivos/Spy";
import Adskimetsu from "./pages/Produtos/ProdutosPages/Adesivos/Pages-adesivos/Kimetsu";
import Adsnaruto from "./pages/Produtos/ProdutosPages/Adesivos/Pages-adesivos/Naruto";
import Adsyuri from "./pages/Produtos/ProdutosPages/Adesivos/Pages-adesivos/Yuri";
import Adshelluva from "./pages/Produtos/ProdutosPages/Adesivos/Pages-adesivos/Helluva";
import Adsvocaloid from "./pages/Produtos/ProdutosPages/Adesivos/Pages-adesivos/Vocaloid";
import Adsghibli from "./pages/Produtos/ProdutosPages/Adesivos/Pages-adesivos/Ghibli";
import Adsordem from "./pages/Produtos/ProdutosPages/Adesivos/Pages-adesivos/Ordem";
import Adsgato from "./pages/Produtos/ProdutosPages/Adesivos/Pages-adesivos/Gatinhos";
import Adscachorro from "./pages/Produtos/ProdutosPages/Adesivos/Pages-adesivos/Cachorros";
import Adstaylor from "./pages/Produtos/ProdutosPages/Adesivos/Pages-adesivos/Taylor";
import Adskpop from "./pages/Produtos/ProdutosPages/Adesivos/Pages-adesivos/Kpop";
import Adsoutros from "./pages/Produtos/ProdutosPages/Adesivos/Pages-adesivos/Outros";

function AppRoutes () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element= {<Home/>}> </Route>
                <Route path="/eventos" element= {<Eventos/>}> </Route>
                <Route path="/sobre" element= {<Sobre/>}> </Route>

                
                <Route path="/produtos" element= {<Produtos_first/>}> </Route>
                
                
                
                <Route path="produtos/adesivos" element= {<Adesivos/>}></Route>
                <Route path="produtos/adesivos/adslol" element = {<Lol/>}></Route>
                <Route path="produtos/adesivos/adsvalorant" element = {<Adsvalorant/>}></Route>
                <Route path="produtos/adesivos/adsfnaf" element = {<Adsfnaf/>}></Route>
                <Route path="produtos/adesivos/adspokemon" element = {<Adspokemon/>}></Route>
                <Route path="produtos/adesivos/adsgeshin" element = {<Adsgenshin/>}></Route>
                <Route path="produtos/adesivos/adsonepiece" element = {<Adsonepiece/>}></Route>
                <Route path="produtos/adesivos/adschainsaw" element = {<Adschainsaw/>}></Route>
                <Route path="produtos/adesivos/adsboku" element = {<Adsboku/>}></Route>
                <Route path="produtos/adesivos/adshaikyuu" element = {<Adshaikyuu/>}></Route>
                <Route path="produtos/adesivos/adsspy" element = {<Adsspy/>}></Route>
                <Route path="produtos/adesivos/adskimetsu" element = {<Adskimetsu/>}></Route>
                <Route path="produtos/adesivos/adsnaruto" element = {<Adsnaruto/>}></Route>
                <Route path="produtos/adesivos/adsyuri" element = {<Adsyuri/>}></Route>
                <Route path="produtos/adesivos/adshelluva" element = {<Adshelluva/>}></Route>
                <Route path="produtos/adesivos/adsvocaloid" element = {<Adsvocaloid/>}></Route>
                <Route path="produtos/adesivos/adsghibli" element = {<Adsghibli/>}></Route>
                <Route path="produtos/adesivos/adsordem" element = {<Adsordem/>}></Route>
                <Route path="produtos/adesivos/adsgato" element = {<Adsgato/>}></Route>
                <Route path="produtos/adesivos/adscachorro" element = {<Adscachorro/>}></Route>
                <Route path="produtos/adesivos/adstaylor" element = {<Adstaylor/>}></Route>
                <Route path="produtos/adesivos/adskpop" element = {<Adskpop/>}></Route>
                <Route path="produtos/adesivos/adsoutros" element = {<Adsoutros/>}></Route>


                <Route path="/artes" element= {<Artes/>}> </Route>
                <Route path="artes/jujutsu" element= {<Pagejjk/>}> </Route>
                <Route path="artes/taylor" element= {<Pagetaylor/>}> </Route>

                
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
