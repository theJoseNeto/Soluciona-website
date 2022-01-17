
import logovazada from "../../assets/images/logovazada.png";
import './style.css';

export default function Header(){
    return(
        <header>
            <img className="logo-soluc" src={logovazada}/>
            <button className="contact-button">Fale <br/> conosco</button>
        </header> 
    )
}