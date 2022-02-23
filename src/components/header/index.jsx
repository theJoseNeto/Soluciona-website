
import logovazada from "../../assets/images/logovazada.png";
import { AiOutlineWhatsApp } from 'react-icons/ai';

import './style.css';


export default function Header(){
    return(
        <header>
            <img className="logo-soluc" src={logovazada} alt="soluciona"/>
            
            <a  className="contact-button" href="https://instagram.com/soluciona.io/">
                <AiOutlineWhatsApp className="wpp-button"></AiOutlineWhatsApp>                
                <p>Fale conosco ;)</p>
            </a>

        </header> 
    )
}
