import { NavLink } from "react-router-dom";

export function Navbar(props){

    let activeNavStyle = {
        textDecorationColor: "green",
        textDecorationLine: "line-through"
    }

    return(
        <nav>
            <div className="navbar">
                    <NavLink className="navbar-brand" to="/" style={({isActive}) => isActive ? activeNavStyle : undefined}>
                        HOME
                    </NavLink>
                    <div className="navbar-menu">
                        <div className="navbar-start">
                        <NavLink className="navbar-item" to="/about"  style={({isActive}) => isActive ? activeNavStyle : undefined}>
                            ABOUT
                        </NavLink>
                    
                        <NavLink className="navbar-item" to="/contact" style={({isActive}) => isActive ? activeNavStyle : undefined}>
                            CONTACT
                        </NavLink>

                        <NavLink className="navbar-item" to="/projects" style={({isActive}) => isActive ? activeNavStyle : undefined}>
                            PROJECTS
                        </NavLink>
                    </div>
                        </div>
                
            </div>
        </nav>
    )
}