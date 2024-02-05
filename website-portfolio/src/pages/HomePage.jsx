import mainpic from '../assets/mainpic.jpg'
import { Link } from 'react-router-dom'
import './styles/home-style.css'

export function HomePage(props){
    return (
        <>
        <div className=''>
            <div id="header">
                <figure className="image is-pulled-right">
                    <img id="headerpic" className="is-rounded" src={mainpic} alt="A picture of Imogen Behan-Willett"/>
                </figure> 
                <div id="name">
                    <h1>Imogen</h1>
                    <h1>Behan-</h1>
                    <h1>Willett</h1>
                    <p>Web developer.</p>
                </div>
            
                    
            </div>
            <div className="block is-flex-direction-column">
                <Link to="/about" className="button is-responsive">ABOUT</Link>
                <br/>
                <Link to="/projects" className="button is-responsive">PROJECTS</Link>
                <br/>
                <Link to="/contact" className="button is-responsive">CONTACT</Link>
                </div>
            </div>
        </>
        )
}