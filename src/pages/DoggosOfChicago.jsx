import React from "react";
import doggo1 from "../assets/DSC_0224.jpg";
import doggo2 from "../assets/DSC_0278.jpg";
import doggo3 from "../assets/DSC_0294.jpg";
import doggo4 from "../assets/DSC_0301.jpg";
import doggo5 from "../assets/DSC_0303.jpg";
import doggo6 from "../assets/DSC_0322.jpg";
import doggo7 from "../assets/DSC_0325.jpg";
import squareimg from "../assets/squaregraphic.jpg";
import { TwoImageRow, ThreeImageBlock, OneImageRow, ThreeImageRow, FourImageRow, FiveImageRow } from "../components/GalleryBlocks";
import Footer from '../components/Footer';

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
                    <TwoImageRow imgs={[doggo5, doggo4]} />
                    <ThreeImageBlock img1={doggo6} img2={doggo6} img3={doggo6} />
                    <OneImageRow img={doggo2} />
                    <ThreeImageRow img1={doggo1} img2={doggo3} img3={doggo6} />
                    <FourImageRow imgs={[doggo7, doggo2, doggo5, doggo6]} />
                    <FiveImageRow imgs={[doggo1, doggo3, doggo4, doggo7, doggo6]} />
                    <ThreeImageBlock img1={squareimg} img2={squareimg} img3={squareimg} reverse={true}/>
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