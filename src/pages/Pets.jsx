import React from "react";
import { InlineNavLink, NavLink } from "../components/Navbar/NavbarElems";
import Footer from '../components/Footer';
import { TwoImageRow, ThreeImageBlock, OneImageRow, ThreeImageRow, FourImageRow, FiveImageRow } from "../components/GalleryBlocks";

import doggo13 from "../portfolio-assets/Doggos13.JPG";
import doggo15 from "../portfolio-assets/Doggos15.JPG";
import doggo6 from "../portfolio-assets/Doggos6.JPG";
import doggo20 from "../portfolio-assets/Doggos20.JPG";
import doggo19 from "../portfolio-assets/Doggos19.JPG";
import adore1 from "../portfolio-assets/Adore1.jpg";
import adore2 from "../portfolio-assets/Adore2.JPG";
import appa1 from "../portfolio-assets/Appa1.jpg";
import appa2 from "../portfolio-assets/Appa2.jpg";
import chapo1 from "../portfolio-assets/Chapo1.jpg";
import chapo2 from "../portfolio-assets/Chapo2.jpg";
import cosmo1 from "../portfolio-assets/Cosmo1.JPG";
import cosmo2 from "../portfolio-assets/Cosmo2.JPG";
import cosmo3 from "../portfolio-assets/Cosmo3.JPG";
import cosmo4 from "../portfolio-assets/Cosmo4.JPG";
import juni1 from "../portfolio-assets/Juni1.jpg";
import juni2 from "../portfolio-assets/Juni2.jpg";
import messi1 from "../portfolio-assets/Messi1.JPG";
import play1 from "../portfolio-assets/Play1.jpg";
import scooby1 from "../portfolio-assets/Scooby1.JPG";
import scooby2 from "../portfolio-assets/Scooby2.JPG";
import scooby3 from "../portfolio-assets/Scooby3.JPG";
import scooby4 from "../portfolio-assets/Scooby4.JPG";
import scooby5 from "../portfolio-assets/Scooby7.jpg";
import scooby6 from "../portfolio-assets/Scooby6.JPG";
import shaggy1 from "../portfolio-assets/Shaggy1.JPG";
import shaggy2 from "../portfolio-assets/Shaggy2.JPG";
import shaggy3 from "../portfolio-assets/Shaggy3.JPG";
import shaggy4 from "../portfolio-assets/Shaggy4.JPG";
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
                        See more Doggos of Chicago on
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