import { NavLink } from "react-router-dom"
import mainpic from '../assets/mainpic.jpg'

export function Navbar(props){

    let activeNavStyle = {
        textDecorationColor: "green",
        textDecorationLine: "line-through"
    }

    return(
        <nav>
            <div className="navbar">
                <div className="navbar-brand">
                    <NavLink to="/" className="navbar-item" style={({isActive}) => isActive ? activeNavStyle : undefined}>
                    <img id="headerpic"  src={mainpic} alt="A picture of Imogen Behan-Willett"/>
                    </NavLink>

                    <NavLink className="navbar-item" to="/about"  style={({isActive}) => isActive ? activeNavStyle : undefined}>
                         ABOUT
                     </NavLink>

                    <NavLink className="navbar-item" to="/projects" style={({isActive}) => isActive ? activeNavStyle : undefined}>
                        PROJECTS
                    </NavLink> 
                   
                   <NavLink className="navbar-item" to="/contact" style={({isActive}) => isActive ? activeNavStyle : undefined}>
                        CONTACT
                    </NavLink>
                    
                </div>
            </div>
        </nav>
    )
}