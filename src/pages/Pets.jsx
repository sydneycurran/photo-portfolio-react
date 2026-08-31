import React from "react";
import { InlineNavLink, NavLink } from "../components/Navbar/NavbarElems";
import Footer from '../components/Footer';
import { TwoImageRow, ThreeImageBlock, OneImageRow, ThreeImageRow, FourImageRow, FiveImageRow } from "../components/GalleryBlocks";

import doggo13 from "../portfolio-assets/Doggos13.jpg";
import doggo15 from "../portfolio-assets/Doggos15.jpg";
import doggo6 from "../portfolio-assets/Doggos6.jpg";
import doggo20 from "../portfolio-assets/Doggos20.jpg";
import doggo19 from "../portfolio-assets/Doggos19.jpg";
import adore1 from "../portfolio-assets/Adore1.jpg";
import adore2 from "../portfolio-assets/Adore2.jpg";
import appa1 from "../portfolio-assets/Appa1.jpg";
import appa2 from "../portfolio-assets/Appa2.jpg";
import chapo1 from "../portfolio-assets/Chapo1.jpg";
import chapo2 from "../portfolio-assets/Chapo2.jpg";
import cosmo1 from "../portfolio-assets/Cosmo1.jpg";
import cosmo2 from "../portfolio-assets/Cosmo2.jpg";
import cosmo3 from "../portfolio-assets/Cosmo3.jpg";
import cosmo4 from "../portfolio-assets/Cosmo4.jpg";
import juni1 from "../portfolio-assets/Juni1.jpg";
import juni2 from "../portfolio-assets/Juni2.jpg";
import messi1 from "../portfolio-assets/Messi1.jpg";
import play1 from "../portfolio-assets/Play1.jpg";
import scooby1 from "../portfolio-assets/Scooby1.jpg";
import scooby2 from "../portfolio-assets/Scooby2.jpg";
import scooby3 from "../portfolio-assets/Scooby3.jpg";
import scooby4 from "../portfolio-assets/Scooby4.jpg";
import scooby5 from "../portfolio-assets/Scooby7.jpg";
import scooby6 from "../portfolio-assets/Scooby6.jpg";
import shaggy1 from "../portfolio-assets/Shaggy1.jpg";
import shaggy2 from "../portfolio-assets/Shaggy2.jpg";
import shaggy3 from "../portfolio-assets/Shaggy3.jpg";
import shaggy4 from "../portfolio-assets/Shaggy4.jpg";
import tas1 from "../portfolio-assets/Tas1.jpg";
import tas2 from "../portfolio-assets/Tas2.jpg";

const Pets = () => {
    return (
        <div className="page-div">
            <h1 class="gallery-title">Pets</h1>
            <div className="page-content">
                <div className="gallery-div">
                    <OneImageRow img={cosmo3} />
                    <TwoImageRow imgs={[appa2, appa1]} />
                    <ThreeImageRow img1={cosmo1} img2={cosmo2} img3={cosmo4} />
                    <FourImageRow imgs={[chapo1, chapo2, adore1, adore2]} />
                    <ThreeImageBlock img1={play1} img2={juni1} img3={tas1} reverse={true} />
                    <TwoImageRow imgs={[juni2, tas2]} />
                    <ThreeImageRow img1={messi1} img2={scooby2} img3={shaggy1} />
                    <TwoImageRow imgs={[scooby5, scooby6]} />
                    <ThreeImageRow img1={scooby3} img2={scooby4} img3={scooby1} />
                    <ThreeImageBlock img1={shaggy4} img2={shaggy2} img3={shaggy3} />
                    
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
                <div className="gallery-div">
                    <ThreeImageBlock img1={doggo19} img2={doggo13} img3={doggo20} />
                    <TwoImageRow imgs={[doggo6, doggo15]} />
                </div>
            </div>
            <Footer />
            
        </div>
    )
};

export default Pets;