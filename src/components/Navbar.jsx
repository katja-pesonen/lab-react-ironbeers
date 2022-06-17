// Navbar: Displaying the basic navbar with the home button

import React from "react"
import homeButton from '../assets/homeimg.PNG';


function Navbar() {
    return (

    <div>
    <nav className="navbar" style={{backgroundColor: 'rgb(77, 200, 248)'}}>
    <div className="container">
        <h3><a href="/"><img src={homeButton} alt='home' /></a></h3>
       </div>
     </nav>
     </div>
    )
}


export default Navbar;