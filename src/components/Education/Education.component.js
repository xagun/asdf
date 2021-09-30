import React from 'react'
import './Education.component.css'

import { FaSchool } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";

const Education = () => {
    const [header] = React.useState({
        mainHeader: "Education",
        subHeader: "My Education",
        text: "Education blah blah blah blahblah blahblah blah blah blah blah blah blah blah blah blah"
        
    });

    const [state] = React.useState([{
        id: 1,
        icon: "FaSchool",
        heading: "School",
        name: "PPES",
        details: "Completed 2014"
    },
        {
            id: 2,
            icon: "FaBuilding",
            heading: "High School",
            name: "CCRC",
            details: "Completed 2016"
        },
        {
            id: 3,
            icon: "FaUniversity",
            heading: "College",
            name: "Softwarica College of IT & E-Commerce",
            details: "Completed 2020"
        }
    ])
    return (
        <div className="education" id="education">
            <div className="container">

                <div className="education_header">


                    <div className="common">
                        <h3 className="content_heading">{header.mainHeader}</h3>
                        <h1 className="main_heading"> {header.subHeader} </h1>
                        <p className="content_feeds">
                            {header.text}
                        </p>
                        <div className="common_border">
                        </div>
                    </div>

                    <div className="row">
                        {state.map((info) => (

                            <div className="col-4">
                                <div className="box">
                                    <FaSchool className="commonIcons" />
                                    <div className="box_header">{info.heading}</div>
                                    <div className="box_name">{info.name}</div>
                                    <div className="box_details">{info.details}</div>
                                </div>
                            </div>

                        ))}


                    </div>

                </div>

            </div>
        </div>
    )
}

export default Education
