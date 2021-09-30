import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterestSquare } from "react-icons/fa";
import './Footer.component.css'


const Footer = () => {
    return (
        <MDBFooter color="black" className="font-small pt-4">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="6">
              <h2 className="title"><strong>Sagun Shrestha</strong></h2>
              <p>
                This is the footer section of my portfolio site
              </p>
            </MDBCol>
            
            
              <div className = "links-footer">
              
                  <a href="#!"><FaFacebookSquare size={30} style={{ fill: 'white' }}/></a>
                
            
                  <a href="#!"><FaInstagramSquare size={30} style={{ fill: 'white' }}/></a>
                
                  <a href="#!"><FaLinkedin size={30} style={{ fill: 'white' }}/></a>
                
                  <a href="#!"><FaPinterestSquare size={30} style={{ fill: 'white' }}/></a>
                  </div>
             
            
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright: <a href="">Sagun Shrestha </a>
          </MDBContainer>
        </div>
      </MDBFooter>
    )
}

export default Footer
