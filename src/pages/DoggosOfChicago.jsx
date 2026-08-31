import React from "react";
import { TwoImageRow, ThreeImageBlock, OneImageRow, ThreeImageRow, FourImageRow, FiveImageRow } from "../components/GalleryBlocks";
import Footer from '../components/Footer';
import doggo1 from "../portfolio-assets/Doggos1.jpg";
import doggo2 from "../portfolio-assets/Doggos2.jpg";
import doggo3 from "../portfolio-assets/Doggos3.jpg";
import doggo4 from "../portfolio-assets/Doggos4.jpg";
import doggo5 from "../portfolio-assets/Doggos5.jpg";
import doggo6 from "../portfolio-assets/Doggos6.jpg";
import doggo7 from "../portfolio-assets/Doggos7.jpg";
import doggo8 from "../portfolio-assets/Doggos8.jpg";
import doggo9 from "../portfolio-assets/Doggos9.jpg";
import doggo10 from "../portfolio-assets/Doggos10.jpg";
import doggo11 from "../portfolio-assets/Doggos11.jpg";
import doggo12 from "../portfolio-assets/Doggos12.jpg";
import doggo13 from "../portfolio-assets/Doggos13.jpg";
import doggo14 from "../portfolio-assets/Doggos14.jpg";
import doggo15 from "../portfolio-assets/Doggos15.jpg";
import doggo16 from "../portfolio-assets/Doggos16.jpg";
import doggo17 from "../portfolio-assets/Doggos17.jpg";
import doggo18 from "../portfolio-assets/Doggos18.jpg";
import doggo19 from "../portfolio-assets/Doggos19.jpg";
import doggo20 from "../portfolio-assets/Doggos20.jpg";
import doggo21 from "../portfolio-assets/Doggos21.jpg";
import doggo22 from "../portfolio-assets/Doggos22.jpg";
import doggo23 from "../portfolio-assets/Doggos23.jpg";


const DoggosOfChicago = () => {
    return (
        <div className="page-div">
            <h1 class="gallery-title">Doggos of Chicago</h1>
            <div className="page-content">
                <p className="page-text">
                    I started photographing the "Doggos of Chicago" in April of 2020 as a way
                    of connecting with the dogs of the city while remaining socially distant 
                    from the dogs and their humans. I still go out to meet my local doggos and 
                    take their pictures as they romp about. I also get to pet the dogs now, which
                    is a plus. This page is periodically updated with pictures of more Doggos of Chicago.
                </p>
                <div className="gallery-div">
                    <OneImageRow img={doggo19} />
                    <TwoImageRow imgs={[doggo5, doggo6]} />
                    <ThreeImageBlock img1={doggo12} img2={doggo18} img3={doggo16} />
                    <ThreeImageRow img1={doggo2} img2={doggo11} img3={doggo14} />
                    <TwoImageRow imgs={[doggo3, doggo20]} />
                    <ThreeImageRow img1={doggo13} img2={doggo15} img3={doggo22} />
                    <TwoImageRow imgs={[doggo17, doggo23]} />
                    <ThreeImageRow img1={doggo1} img2={doggo4} img3={doggo7} />
                    <ThreeImageBlock img1={doggo21} img2={doggo9} img3={doggo10} reverse={true}/>
                    <OneImageRow img={doggo8} />
                </div>
                <p className="page-text">
                    Did you and your dog meet me in the park? <a href="mailto:sydneycurranphotography@gmail.com">Send me an email
                        </a> with the name of your dog and a reference photo to see some more shots.
                </p>
            </div>
            <Footer />
        </div>
    )
};

export default DoggosOfChicago;