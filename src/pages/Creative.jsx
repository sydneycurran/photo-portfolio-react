import React from "react";
import "./page-styles.css";
import { NavLink } from "../components/Navbar/NavbarElems";
import GalleryCoverNav from "../components/GalleryCoverNav";
import { TwoImageRow, ThreeImageBlock, OneImageRow, ThreeImageRow, FourImageRow, FiveImageRow } from "../components/GalleryBlocks";
import image1 from "../assets/DSC_0294.jpg"
import splatter from "../assets/splatter2.jpg"
import wrigley2 from '../portfolio-assets/Wrigley2.jpg'
import paper1 from '../portfolio-assets/Paper1.jpg'
import prism2 from '../portfolio-assets/Prism2.jpg'
import floraw5 from '../portfolio-assets/FloraW5.jpg'
import Footer from '../components/Footer';
import polyscape1 from '../portfolio-assets/Botantic Garden Polyscape.jpg'
import polyscape2 from '../portfolio-assets/Chicago Polyscape.jpg'
import bwflower1 from '../portfolio-assets/BWFlower1.jpg'
import bwflower2 from '../portfolio-assets/BWFlower2.jpg'
import bwflower3 from '../portfolio-assets/BWFlower3.jpg'
import bwflower4 from '../portfolio-assets/BWFlower4.jpg'
import trapeeze1 from '../portfolio-assets/Cloe-Randy Art 1.jpg'
import trapeeze2 from '../portfolio-assets/Jessie-Randy Art 1.jpg'
import gatsby1 from '../portfolio-assets/Gatsby Daisy Eva 1.jpg'
import gatsby2 from '../portfolio-assets/Gatsby Daisy Jay Eva Reeve 1.jpg'
import gatsby3 from '../portfolio-assets/Gatsby Daisy Jay Eva Reeve 2.jpg'
import gatsby4 from '../portfolio-assets/Gatsby Jordan Samantha 2.jpg'
import gatsby5 from '../portfolio-assets/Gatsby Nick Corbin 1.jpg'
import hadestown1 from '../portfolio-assets/Hadestown Eva Eurydice 1.jpg'
import hadestown2 from '../portfolio-assets/Hadestown Eva Eurydice 2.jpg'
import hadestown3 from '../portfolio-assets/Hadestown Eva Reeve 2.jpg'

const Creative = () => {
    return (
        <div className="page-div">
            <img src={splatter} id="creative-bg-image" />
            <h1 class="page-title">Creative Collections</h1>
            <div className="page-content">
                <div id="creative-nav">
                    <div className="creative-gall-cover">
                        <GalleryCoverNav dest="/creative/flora-and-fauna" gallerytitle="Flora and Fauna" 
                            imgsrc={floraw5}/>
                    </div>
                    <div className="creative-gall-cover">
                        <GalleryCoverNav  gallerytitle="Bits and Pieces" dest="/creative/bits-and-pieces"
                            imgsrc={paper1}/>
                    </div>
                    <div className="creative-gall-cover">
                        <GalleryCoverNav  gallerytitle="There and Then" dest="/creative/there-and-then"
                            imgsrc={wrigley2}/>
                    </div>
                </div>
                <div class='subsection'>
                    <hr/>
                    <h2 className="subhead">Artistic Expressions</h2>
                </div>
                <div className="gallery-div">
                    <ThreeImageRow img1={bwflower4} img2={bwflower3} img3={bwflower2} />
                    <TwoImageRow imgs={[polyscape1, polyscape2]} />
                    <ThreeImageRow img1={hadestown2} img2={hadestown1} img3={hadestown3} />
                    <FiveImageRow imgs={[gatsby4, gatsby5, gatsby1, gatsby2, gatsby3,]} />
                    <TwoImageRow imgs={[trapeeze1, trapeeze2]} />
                    
                </div>
            
            </div>
            <Footer />
        </div>
    )
};

export default Creative;