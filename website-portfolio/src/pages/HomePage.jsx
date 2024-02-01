import mainpic from '../assets/mainpic.jpg'
import { Link } from "react-router-dom"

export function HomePage(props){
    return (
        <>
        <div >
            <div id="name">
                <h1>Imogen</h1>
                <h1>Behan-</h1>
                <h1>Willett</h1>
            </div>
                <img id="headerpic" src={mainpic} alt="A picture of Imogen Behan-Willett"/> 
                <p>Web developer.</p>
        </div>
        <div id="buttons">
            <Link to="/about">ABOUT</Link>
            <Link to="/about">PROJECTS</Link>
            <Link to="/about">CONTACT</Link>
            </div>
        </>
        )
}