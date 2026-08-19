import React from "react";
import selfportrait from "../assets/DSC_0303.jpg"
import Footer from '../components/Footer';

const About = () => {
    return (
        <div className="page-div">
            <h1 class="page-title">About</h1>
            <div className="page-content">
                <div id="about-me">
                    <img src={selfportrait}/>
                    <div id="intro-text">
                        <h2>Hi, I'm Sydney!</h2>
                        <p className="page-text">
                            I'm a college student in Philly that loves photography. 
                            I bring an artful documentary style to every image I take, 
                            making sure that my photos can express everything that a 
                            moment has to offer. I would love to capture your event, 
                            your pet, or other meaningful aspect of your life.
                        </p>
                    </div>
                    <p className="page-text">
                        I am a Senior Photographer at the Daily Pennsylvanian, 
                        the independent student newspaper at the University of Pennsylvania. 
                        You can check out my work for them on <a href="https://www.thedp.com/staff/sydney-curran"> 
                        the DP's website</a>.
                    </p>
                    
                </div>
                <div id="rates">
                    <hr/>
                    <h2 className="subhead">Rates</h2>
                    <p className="page-text"> I offer private pet photo sessions at a location of 
                        your choice. Private pet photo sessions are $100/hour available in 15-, 30-, 
                        45-, and 60-minute blocks. Unwatermarked digital copies are included in the 
                        cost of a private session; prints are an additional cost. 
                        <a href="mailto:sydneycurranphotography@gmail.com"> Email me </a> to book a 
                        private pet session.
                    </p>
                    <p className="page-text">
                        My event photography is priced on a sliding scale. Please 
                        <a href="mailto:sydneycurranphotography@gmail.com"> email me </a>
                        with information about you and your event to get a quote.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default About;