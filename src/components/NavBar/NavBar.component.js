
import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.component.css'

const NavBar = () => {
    return (
        <nav className="navBar">
           
            <div className = "container">

            <div className = "navBar_container"> 
            <ul className="navBar_left">
                <div className = "navBar_left_logo">
                <img src="images/logo.png" />
                </div>
                

            </ul>
            
          
            <ul className="navList_right">
                <li className="navItem"><a href="#home" activeClassName="active_navLink">Home</a></li>
                <li className="navItem"><a href="#education" activeClassName="active_navLink">Education</a></li>
                <li className="navItem"><a href="#skills" activeClassName="active_navLink">Skills</a></li>
                <li className="navItem"><a href="#about" activeClassName="active_navLink">About</a></li>
                <li className="navItem"><a href="#contact" activeClassName="active_navLink">Contact</a></li>

            </ul>
            </div>
            
            </div>

        </nav>
    )
}

export default NavBar


