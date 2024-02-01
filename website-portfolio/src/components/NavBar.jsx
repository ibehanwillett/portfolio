import { NavLink } from "react-router-dom";

export function Navbar(props){

    let activeNavStyle = {
        textDecorationColor: "green",
        textDecorationLine: "line-through"
    }

    return(
        <nav>
            <div>
                    <NavLink to="/" style={({isActive}) => isActive ? activeNavStyle : undefined}>
                        HOME
                    </NavLink>

                    <NavLink to="/about"  style={({isActive}) => isActive ? activeNavStyle : undefined}>
                        ABOUT
                    </NavLink>
                
                    <NavLink to="/contact" style={({isActive}) => isActive ? activeNavStyle : undefined}>
                        CONTACT
                    </NavLink>

                    <NavLink to="/projects" style={({isActive}) => isActive ? activeNavStyle : undefined}>
                        PROJECTS
                    </NavLink>
                
            </div>
        </nav>
    )
}