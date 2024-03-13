import mainpic from '../assets/mainpic.jpg'
import { Link } from 'react-router-dom'
import '../styles/home-style.css'

export function HomePage(props){
    return (
        <>
        <div className=''>
            <div id="header">
                <img id="headerpic"src={mainpic} alt="A picture of Imogen Behan-Willett"/>
                <div id="name">
                    <h1 id="im">Imogen</h1>
                    <h1 id="beh">Behan-</h1>
                    <h1 id="will">Willett</h1>
                    <p>Web developer.</p>
                </div>
            
                    
            </div>
            <div id="btn-grid">
                <Link to="/about" className="home-btn">ABOUT</Link>
                <br/>
                <Link to="/projects" className="home-btn">PROJECTS</Link>
                <br/>
                <Link to="/contact" className="home-btn">CONTACT</Link>
                </div>
            </div>
        </>
        )
}