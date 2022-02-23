import "./homePage.css";
import '../../styles/global.css';

import pgtoUnique from '../../assets/images/col01.jpg';

import Header from "../../components/header";
import TextBox from "../../components/text-box";
import { Footer } from "../../components/footer";

import { AiOutlineArrowDown } from 'react-icons/ai';

export default function Home() {

    return (
        <>
            <div className="page-home">
                <Header />
                <div className="cta-container-title">
                    <h1 className="cta-title">A soluciona pode te ajudar ainda hoje.</h1>
                    <div className="container-arrow">
                        <p>Em poucos cliques você pode ter o que seu negócio precisa.</p>
                        <p><strong>Saiba mais.</strong></p>
                        <a className="arrow-icon" href="#text-boxes">
                            <AiOutlineArrowDown />
                        </a>
                    </div>
                </div>
                <section id="text-boxes" className="container-text-box">
                    <TextBox
                        title="Onde está o problema?"
                        text='Muitos comerciantes ainda estão presos à mentalidade de que seu comércio local funciona a base do boca a boca. A pandemia veio e mostrou que isso está errado, sem soluções tecnológicas seu comércio não vai pra frente.' />
                    <TextBox
                        title='Até mesmo os pequenos comerciantes podem'
                        text='A soluciona veio para democratizar o acesso a serviços em que o pequeno e médio empreendedor consegue obter os mecanismos básicos para funcionar na internet pagando pouco. Role a tela e conheça os serviços disponíveis.' />
                </section>
                <section className="container-plan-images">
                    <div className="container-plan-images-row-01">
                        <div className="product-name">
                            <h2>Agregador de links</h2>

                            <p>
                                Você no controle. Direcione seus cliente para onde quiser. 
                                Veja um exemplo clicando <a href="https://minhastack.slcn.app">aqui</a> 
                            </p>
                        </div>
                    </div>
                    <div className="container-plan-images-row-02">
                        <div className="col-02 container-child-plan-images">
                            <img src={pgtoUnique} alt="services" />
                            <a href="https://bit.ly/mensal-soluciona" className="default-cta-button">Adquirir plano</a>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}

