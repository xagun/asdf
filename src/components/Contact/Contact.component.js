import React from 'react'
import './Contact.component.css'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';
const Contact = () => {
    return (
        <div className = "contact" id="contact">
            <div className = "container">
        <MDBContainer className = "form-container">
        <MDBRow>
          <MDBCol md="5" className = "form-contact">
              
            <form className = "subscribe-form">
              <p className="h5 text-center mb-4">Subscribe</p>
              <div className="grey-text">
                <MDBInput label="Your name" icon="user" group type="text" validate error="wrong"
                  success="right" />
                <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
                  success="right" />
              </div>
              <div className="text-center">
                <MDBBtn outline color = "red">
                  Send
                  <MDBIcon far icon="paper-plane" className="ml-1" />
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      </div>
      </div>
    )
}

export default Contact
