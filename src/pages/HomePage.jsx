import mainpic from '../assets/mainpic.jpg'
import { Link } from 'react-router-dom'
import '../styles/home-style.css'
import React, { useState } from 'react'
import TextHoverBtn from '../components/TextHoverBtn'

export function HomePage(){
    const [show, setShow] = useState(false)

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
            <div id="grid">
                <div id="grid-top">
                    <Link to="/about">
                        <TextHoverBtn defaulttxt="WHO IS SHE?" hovertxt="About Imogen" />
                    </Link>
                </div>
                <div id="grid-middle">
                    <Link to="/projects">
                    <TextHoverBtn defaulttxt="WHAT HAS SHE DONE?" hovertxt="Past Projects" />
                        </Link>
                </div>
                {/* <div id="grid-bottom">
                    <Link to="/contact">
                    <TextHoverBtn defaulttxt="LET'S TALK" hovertxt="Contact Imogen" />
                    </Link>
                </div> */}
            </div>
            </div>
        </>
        )
}