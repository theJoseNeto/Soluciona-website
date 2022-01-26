import {useState, useEffect} from "react";
import "./style.css";

export default function TextBox(props){
    const title = props.title
    const text = props.text

    return(
        <section className="text-box">
            <h3>{title}</h3>
            <p>{text}</p>
        </section>
    )
      
}