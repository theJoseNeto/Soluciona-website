
import logovazada from "../../assets/images/logovazada.png";
import { AiOutlineWhatsApp } from 'react-icons/ai';

import './style.css';


export default function Header(){
    return(
        <header>
            <img className="logo-soluc" src={logovazada} alt="soluciona"/>
            
            <a  className="contact-button" href="https://api.whatsapp.com/send/?phone=5581983084339&text=Ol%C3%A1%2C+acabei+de+acessar+o+site+e+gostaria+de+entender+mais+sobre+a+soluciona+e+o+servi%C3%A7o+oferecido.+Poderia+me+explicar+um+pouco+mais%3F&app_absent=0">
                <AiOutlineWhatsApp className="wpp-button"></AiOutlineWhatsApp>                
                <p>Dúvidas? <br/> Fale conosco ;)</p>
            </a>

        </header> 
    )
}
