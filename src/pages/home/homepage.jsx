import "./homePage.css";
import '../../styles/global.css';
import Header from"../../components/header";
import TextBox from "../../components/text-box";
import {Footer} from "../../components/footer";
import {AiOutlineArrowDown} from 'react-icons/ai';
import pgtoUnique from '../../assets/images/col01.jpg';
import pgtoMounth from '../../assets/images/col02.jpg';

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
            title='Até mesmo os pequenos comerciantes podem' 
            text='A soluciona veio para democratizar o acesso a serivços em que o pequeno e médio empreendedor consegue obter os mecanismos básicos para funcionar na internet pagando pouco. Role a tela para mais informações.'/>
        </section>

        <section className="container-plan-images">

        <div className="col-02 container-child-plan-images">
            
            <img src={pgtoUnique} alt="services"/>
            <a href="https://bit.ly/mensal-soluciona"  className="default-cta-button">Adquirir plano</a>
        </div>

        <div className="col-01 container-child-plan-images">
            <img src={pgtoMounth} alt="services"/>
            <a href="https://bit.ly/pgto-unico-soluciona" className="default-cta-button">Adquirir plano</a>
        </div>


        </section>
        
        
        </div>
        <Footer/>
        </>
)
}

