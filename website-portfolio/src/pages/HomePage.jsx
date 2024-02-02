import mainpic from '../assets/mainpic.jpg'
import { Link } from 'react-router-dom'
import './styles/home-style.css'

export function HomePage(props){
    return (
        <>
        <div id="header">  
         <img id="headerpic" src={mainpic} alt="A picture of Imogen Behan-Willett"/>  
            <div id="name">
                <h1>Imogen</h1>
                <h1>Behan-</h1>
                <h1>Willett</h1>
                <p>Web developer.</p>
            </div>
           
                
        </div>
        <div id="buttons">
            <Link to="/about">ABOUT</Link>
            <br/>
            <Link to="/about">PROJECTS</Link>
            <br/>
            <Link to="/about">CONTACT</Link>
            </div>
        </>
        )
}