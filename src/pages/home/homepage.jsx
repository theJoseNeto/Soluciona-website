import "./homePage.css";
import Header from"../../components/header";
import {AiOutlineArrowDown} from 'react-icons/ai';

export default function Home(){

    return(
        <div className="page-home">
            <Header/>
            <h1 className="cta-title">Sabia que a soluciona pode te ajudar ainda hoje?</h1>
            
            <div className="container-arrow">
            <p><strong>Saiba mais.</strong></p>
            <button className="arrow-icon">
             <AiOutlineArrowDown />
            </button>
        </div>
            <p>
                Muitos donos de comércios ainda estão presos na mentalidade de que tudo pode ser resolvido no boca a boca, e que essa história de tecnologia é muito cara. Sem enxergar que ela pode ser uma grande aliada e quem em breve pode ser sua maior inimiga caso não modernize seu comércio. Pensando nisso a soluciona foi criada, você tem tecnologia barata que funciona, sem precisar pagar caro e ainda fica a frente da concorrência.
            </p>
            <br/>
        </div>
    )
}

