import React from 'react'
import "./Banner.component.css"
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterestSquare } from "react-icons/fa";

const Banner = () => {

    const [state] = React.useState({
        title: 'I am Sagun Shrestha',
        text: 'Hello I,m Sagun, a passionate web developer.'
    })
    return (
        <header className = "header">
            <div className = "container" id="home">
                <div className = "row">
                    <div className = "col-6">
                        <div className = "header-content">
                            <div className = "header-section">
                            <ul className = "header_ul">
                                <a href = ""><li><FaFacebookSquare /></li></a>
                                <a href = ""><li><FaInstagramSquare /></li></a>
                                <a href = ""><li><FaLinkedin /></li></a>
                                <a href = ""><li><FaPinterestSquare /></li></a>
                            </ul>

                            <h1>{state.title}</h1>
                            <p>{state.text}</p>

                            <div className = "banner_buttons">
                            
                            <a href = "/portfolio" className = "btn btn-outline" >My Portfolio</a>
                            </div>
                        </div>
                        </div>

                    </div>
                </div>
            </div>
           
        </header>
    )
}

export default Banner
