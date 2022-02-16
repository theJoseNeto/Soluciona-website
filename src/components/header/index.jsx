
import logovazada from "../../assets/images/logovazada.png";
import './style.css';

export default function Header(){
    return(
        <header>
            <img className="logo-soluc" src={logovazada} alt="soluciona"/>

            <a href="https://instagram.com/soluciona.io/" className="contact-button">
                Fale conosco
            </a>

        </header> 
    )
}
