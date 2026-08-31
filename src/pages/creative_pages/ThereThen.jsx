import React from "react";
import { TwoImageRow, ThreeImageBlock, OneImageRow, ThreeImageRow, FourImageRow, FiveImageRow } from "../../components/GalleryBlocks";
import Footer from '../../components/Footer';
import boardwalk1 from '../../portfolio-assets/Boardwalk1.JPG'
import boardwalk2 from '../../portfolio-assets/Boardwalk2.jpg'
import fire9 from '../../portfolio-assets/Fire9.jpg'
import fire10 from '../../portfolio-assets/Fire10.jpg'
import microgreens from '../../portfolio-assets/Microgreens.JPG'
import lake from '../../portfolio-assets/Lake.JPG'
import isr1 from '../../portfolio-assets/Isr1.JPG'
import isr2 from '../../portfolio-assets/Isr2.JPG'
import isr3 from '../../portfolio-assets/Isr3.JPG'
import wrigley1 from '../../portfolio-assets/Wrigley1.JPG'
import wrigley2 from '../../portfolio-assets/Wrigley2.JPG'
import sukkah from '../../portfolio-assets/Sukkah.jpg'
import stainedglass from '../../portfolio-assets/StainedGlass.jpg'
import rockport1 from '../../portfolio-assets/Rockport.JPG'
import rockport2 from '../../portfolio-assets/Rockport2.jpg'
import rockport3 from '../../portfolio-assets/Rockport3.jpg'
import rockport4 from '../../portfolio-assets/Rockport4.jpg'
import rockport5 from '../../portfolio-assets/Rockport5.jpg'
import rockport6 from '../../portfolio-assets/Rockport6.jpg'

import plane from '../../portfolio-assets/Plane.jpg'
import market1 from '../../portfolio-assets/Market1.JPG'
import market2 from '../../portfolio-assets/Market2.JPG'
import market3 from '../../portfolio-assets/Market3.JPG'
import candles from '../../portfolio-assets/Candles.JPG'
import ark from '../../portfolio-assets/Ark.jpg'

const ThereThen = () => {
    return (
        <div className="page-div">
            <h1 class="gallery-title">There and Then</h1>
            <div className="page-content">
                <div className="gallery-div">
                    <TwoImageRow imgs={[boardwalk2, boardwalk1]}/>
                    <ThreeImageBlock img1={rockport2} img2={rockport5} img3={rockport1} />
                    <ThreeImageRow img1={rockport6} img2={rockport4} img3={rockport3} />
                    <TwoImageRow imgs={[plane, candles]}/>
                    <ThreeImageRow img1={ark} img2={stainedglass} img3={sukkah} />
                    <TwoImageRow imgs={[wrigley1, wrigley2]}/>
                    <ThreeImageRow img1={isr1} img2={isr2} img3={isr3} />
                    <TwoImageRow imgs={[microgreens, lake]}/>
                    <ThreeImageBlock img1={market1} img2={market2} img3={market3} reverse={true}/>
                    <TwoImageRow imgs={[fire9, fire10]}/>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default ThereThen;