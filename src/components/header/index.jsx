
import logovazada from "../../assets/images/logovazada.png";
import { AiOutlineWhatsApp } from 'react-icons/ai';

import './style.css';


export default function Header(){
    return(
        <header>
            <img className="logo-soluc" src={logovazada} alt="soluciona"/>
            
            <a  className="contact-button" href="https://wa.me/5581983084339/">
                <AiOutlineWhatsApp className="wpp-button"></AiOutlineWhatsApp>                
                <p>Fale conosco ;)</p>
            </a>

        </header> 
    )
}
