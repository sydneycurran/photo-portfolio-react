import React from "react";
import "./page-styles.css";
import reactsvg from "../assets/react.svg"
import doggo1 from "../assets/DSC_0224.jpg"
import doggo2 from "../assets/DSC_0278.jpg"
import doggo3 from "../assets/DSC_0294.jpg"
import doggo4 from "../assets/DSC_0301.jpg"
import doggo5 from "../assets/DSC_0303.jpg"
import doggo6 from "../assets/DSC_0322.jpg"
import doggo7 from "../assets/DSC_0325.jpg"
import squareimg from "../assets/squaregraphic.jpg"
import { FiveImageRow, FourImageRow, OneImageRow, ThreeImageBlock, ThreeImageRow, TwoImageRow } from "../components/GalleryBlocks";
import Footer from '../components/Footer';

const Events = () => {
    return (
        <div className="page-div"> 
            <h1 class="gallery-title">Events</h1>
            <div className="page-content">
                <div className="gallery-div">
                    <p>words</p>
                    <TwoImageRow imgs={[doggo5, doggo4]} />
                    <ThreeImageBlock img1={doggo6} img2={doggo6} img3={doggo6} />
                    <OneImageRow img={doggo2} />
                    <ThreeImageRow img1={doggo1} img2={doggo3} img3={doggo6} />
                    <FourImageRow imgs={[doggo7, doggo2, doggo5, doggo6]} />
                    <FiveImageRow imgs={[doggo1, doggo3, doggo4, doggo7, doggo6]} />
                    <ThreeImageBlock img1={squareimg} img2={squareimg} img3={squareimg} reverse={true}/>
                </div>
            </div>
            
            <Footer />
        </div>
    )
};

export default Events;