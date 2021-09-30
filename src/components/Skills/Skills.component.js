import React from 'react';
import './Skills.component.css';



const Skills = () => {


    const [header] = React.useState({
        mainHeader: 'Skills',
        subHeader: 'My Skills',
        text:'Personal developed skills and educational skills'
    })


    const [state] = React.useState([
      
        {
            id:1,
            title:'Android Application Development'
        },
        {
            id: 2,
            title: 'React JS / Node JS'
        },
        {
            id: 3,
            title: 'MERN stack Application Development'
        }
    ])
    return (
        <div className="skills" id="skills">
        <div className="container">

            <div className="skills_header">


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

                        <div className="col-md-4">
                            <div className="box">
                            
                                <div className="box_header">{info.title}</div>
                                
                            </div>
                        </div>

                    ))}


                </div>

            </div>

        </div>
    </div>
    )
}

export default Skills
