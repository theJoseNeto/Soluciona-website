import "./homePage.css";
import '../../styles/global.css';
import Header from"../../components/header";
import TextBox from "../../components/text-box";
import {Footer} from "../../components/footer";
import {AiOutlineArrowDown} from 'react-icons/ai';


export default function Home(){

    return(
        <>
        <div className="page-home">
            <Header/>
           
            <h1 className="cta-title">Sabia que a soluciona pode te ajudar ainda hoje?</h1>
            <div className="container-arrow">
           
            <p>Em poucos cliques você pode ter o que seu negócio precisa.</p>
            <p><strong>Saiba mais.</strong></p>
           
            <button className="arrow-icon">
             <AiOutlineArrowDown />
            </button>
        </div>

        <section className="container-text-box">

            <TextBox 
            title="Onde está o problema?" 
            text='Muitos comerciantes ainda estão presos à mentalidade de que seu comércio local funciona a base do boca a boca. A pandemia veio e mostrou que isso está errado, sem soluções tecnológicas seu comércio não vai pra frente.'/> 

            <TextBox 
            title='"Sou um pequeno comerciante, investir em tecnologia é caro pra mim"' 
            text='A soluciona veio para mudar isso, nós temos um serviço acessível em que o pequeno e médio empreendedor consegue obter os mecanismos básicos para funcionar na internet pagando pouco. Ficou interessado? Clique em "fale conosco".'/>
        </section>
            
                 
        
        </div>
        <Footer/>
        </>
)
}

