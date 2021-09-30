import React from 'react'
import './About.component.css'

const About = () => {
    const [about] = React.useState({
        subHeader: "About me",
        text: "asdasdasdasdasdasdas"
    });

    const [state] = React.useState([
        {
            id: 1,
            title: "Name",
            text: "Sagun Shrestha"
        }, {
            id: 2,
            title: "Email",
            text: "xagun.shrestha@gmail.com"
        }, {
            id: 3,
            title: "Phone",
            text: "+977-9843903215"
        }, {
            id: 4,
            title: "LinkedIn",
            text: "xagun-shrestha"
        }
    ]);
    return (
        <div className="about" id="about">
            <div className="container">
                <div className="common">

                    <h1 className="main_heading"> {about.subHeader} </h1>
                    <p className="content_feeds">
                        {about.text}
                    </p>
                    <div className="common_border">
                    </div>

                    <div className="row about_box_details">
                        <div className="col-6">
                            <div className="about_img">
                                <img src="images/dead.png" />
                            </div>

                        </div>
                        <div className="col-6">
                            <div className="about_info">
                                <h1>Hi there</h1>
                                <div className="about-p1">
                                    asddddddddddddddddddddddddddddddddddddddddddddddd
                                    asddasdasdasdasdasdasdasdasdasd
                                    asdasdasdasdasdasdasasdsasdasd
                                </div>
                                <div className="about-p2">
                                    asdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                    asddddddddddddddddddddddddddasdasdasdas
                                    asdasdsasdasdasdasdasdasdasdasd
                                    asdas
                                </div>
                                <div className="info-contact">
                                    <div className="row">
                                        {
                                            state.map((info) => (
                                                <div className="col-6">
                                                    <strong>{info.title}</strong>
                                                    <p>{info.text}</p>
                                                </div>
                                            ))
                                        }



                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
