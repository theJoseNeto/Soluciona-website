import "./homePage.css";
import '../../styles/global.css';

import pgtoUnique from '../../assets/images/col01.jpg';

import Header from "../../components/header";
import TextBox from "../../components/text-box";
import { Footer } from "../../components/footer";

import { AiOutlineArrowDown, AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai';

export default function Home() {

    return (
        <>
            <div className="page-home">
                <Header />
                <div className="cta-container-title">
                    <h1 className="cta-title">A soluciona pode te ajudar ainda hoje.</h1>
                    <div className="container-arrow">
                        <p>Vamos dar uma olhada no que seu negócio precisa.</p>
                        <p><strong>clique ou deslize para baixo.</strong></p>
                        <a className="arrow-icon" href="#text-boxes">
                            <AiOutlineArrowDown />
                        </a>
                    </div>
                </div>
                <section id="text-boxes" className="container-text-box">
                    <TextBox
                        title="O que você aprendeu com a pandemia?"
                        text='A pandemia nos mostrou a importância da internet. Os pequenos comerciantes que sobreviveram a esses tempos difíceis e ainda estão vendendo, pode ter certeza que eles estavam bem posicionados no digital.' />
                    <TextBox
                        title='Eu sei o que você deve estar pensando...'
                        text='"Esse pessoal deve ter gasto rios de dinheiro pra estar na internet”. Bom, alguns sim. E foi pensando em ajudar aqueles que tem poucas condições e/ou não sabem usar esse negócio de internet que a soluciona foi criada.' />
                </section>

                <section className="container-plans">

                    <div className="container-plan-images-row-01">

                        <div className="product-name">
                            <h2>Pacote low-level</h2>

                            <p>
                                Então você quer começar de vagar? Vamos nessa!
                            </p>
                        </div>

                        <div className="low-level-pack">
                            <ul>
                                <li> - <s> Site institucional</s> <AiFillCloseCircle /></li>
                                <li> - <s>Como lucrar pelo ifood (caso seu negócio venda comida e bebida) </s><AiFillCloseCircle /></li>
                                <li> - <s>Como se posicionar de forma estratégica no instagram </s><AiFillCloseCircle /></li>
                                <li> - <s>Mentoria de como posicionar seu negócio no Google (apareça no Google maps!)</s><AiFillCloseCircle /></li>
                                <li> - Transforme seu whatsapp Bussiness em uma máquina de vendas <AiFillCheckCircle /></li>
                                <li> - Mentoria de como melhorar seu serviço de atendimento ao cliente.<AiFillCheckCircle /></li>
                            </ul>
                            <div className="price"><p><strong>R$50,00 (pgto único)</strong></p></div>
                        </div>


                    </div>

                    <div className="container-plan-images-row-01 box-emphasis">

                        <div className="product-name">
                            <h2>Pacote empreendedor PRO</h2>

                            <p>(RECOMENDADO) <br/>
                                E aí, vai perder? 
                            </p>
                        </div>

                        <div className="low-level-pack">
                            <ul>
                                <li> -  Site institucional <AiFillCheckCircle /></li>
                                <li> - Como lucrar pelo ifood (caso seu negócio venda comida e bebida) <AiFillCheckCircle /></li>
                                <li> - Como se posicionar de forma estratégica no instagram <AiFillCloseCircle /></li>
                                <li> - Mentoria de como posicionar seu negócio no Google (apareça no Google maps!) <AiFillCheckCircle /></li>
                                <li> - Transforme seu whatsapp Bussiness em uma máquina de vendas <AiFillCheckCircle /></li>
                                <li> - Mentoria de como melhorar seu serviço de atendimento ao cliente. <AiFillCheckCircle /></li>
                            </ul>
                            <div className="price"><p><strong>R$25,00 (pgto mensal)</strong></p></div>

                        </div>

                    </div>


                    <div className="container-plan-images-row-01">

                        <div className="product-name">
                            <h2>Pacote mid-level</h2>

                            <p>
                                A coisa está ficando boa...
                            </p>
                        </div>

                        <div className="low-level-pack">
                            <ul>
                                <li> - <s> Site institucional</s> <AiFillCloseCircle /></li>
                                <li> - <s>Como lucrar pelo ifood (caso seu negócio venda comida e bebida) </s><AiFillCloseCircle /></li>
                                <li> - <s>Como se posicionar de forma estratégica no instagram </s><AiFillCloseCircle /></li>
                                <li> - Mentoria de como posicionar seu negócio no Google (apareça no Google maps!)<AiFillCheckCircle /></li>
                                <li> - Transforme seu whatsapp Bussiness em uma máquina de vendas <AiFillCheckCircle /></li>
                                <li> - Mentoria de como melhorar seu serviço de atendimento ao cliente.<AiFillCheckCircle /></li>
                            </ul>
                            <div className="price"><p><strong>R$150,00 (pgto único)</strong></p></div>

                        </div>

                    </div>



                </section>
            </div>
            <Footer />
        </>
    )
}

