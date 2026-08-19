import React from "react";
import "./page-styles.css";
import { NavLink } from "../components/Navbar/NavbarElems";
import GalleryCoverNav from "../components/GalleryCoverNav";
import image1 from "../assets/DSC_0294.jpg"
import splatter from "../assets/splatter2.jpg"
import Footer from '../components/Footer';

const Creative = () => {
    return (
        <div className="page-div">
            <img src={splatter} id="creative-bg-image" />
            <h1 class="page-title">Creative Collections</h1>
            <div className="page-content">
                <div id="creative-nav">
                    <div className="creative-gall-cover">
                        <GalleryCoverNav dest="/creative/flora-and-fauna" gallerytitle="Flora and Fauna" 
                            imgsrc={image1}/>
                    </div>
                    <div className="creative-gall-cover">
                        <GalleryCoverNav  gallerytitle="Bits and Pieces" dest="/creative/bits-and-pieces"
                            imgsrc={image1}/>
                    </div>
                    <div className="creative-gall-cover">
                        <GalleryCoverNav  gallerytitle="There and Then" dest="/creative/there-and-then"
                            imgsrc={image1}/>
                    </div>
                </div>
            
            </div>
            <Footer />
        </div>
    )
};

export default Creative;