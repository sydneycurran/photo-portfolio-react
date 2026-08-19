import React from "react";
import { InlineNavLink, NavLink } from "../components/Navbar/NavbarElems";
import Footer from '../components/Footer';

const Pets = () => {
    return (
        <div className="page-div">
            <h1 class="gallery-title">Pets</h1>
            <div className="page-content">
                <div className="gallery-div">

                </div>
                <div>
                    <hr/>
                    <h2 className="subhead">Doggos Of Chicago</h2>
                    <p className="page-text">
                        "Doggos of Chicago" began as a personal project in April of 2020 because 
                        while I couldn't go within 6 feet of other people to pet their dogs, I 
                        could still take pictures of the dogs I saw in the park. Even though I'm 
                        now free to pet the dogs I see in the park, I still enjoy going out and 
                        taking pictures of the dogs around me. See more Doggos of Chicago on
                        the <InlineNavLink className="inline-link" to="/doggos-of-chicago">
                            Doggos of Chicago page
                            </InlineNavLink>.
                    </p>
                </div>
                
            </div>
            <Footer />
            
        </div>
    )
};

export default Pets;