
import logovazada from "../../assets/images/logovazada.png";
import './style.css';

export default function Header(){
    return(
        <header>
            <img className="logo-soluc" src={logovazada}/>

            <a  className="contact-button" href="https://instagram.com/soluciona.io/" target="_blank">
                Fale conosco
            </a>

        </header> 
    )
}