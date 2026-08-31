import React from "react";
import Footer from '../../components/Footer';
import { TwoImageRow, ThreeImageBlock, OneImageRow, ThreeImageRow, FourImageRow, FiveImageRow } from "../../components/GalleryBlocks";

import buffalo1 from '../../portfolio-assets/Buffalo1.JPG'
import car1 from '../../portfolio-assets/Car1.JPG'
import car2 from '../../portfolio-assets/Car2.JPG'
import car3 from '../../portfolio-assets/Car3.JPG'
import car4 from '../../portfolio-assets/Cars4_U.jpg'
import chain1 from '../../portfolio-assets/Chain1.jpg'
import chain2 from '../../portfolio-assets/Chain2.jpg'
import chain3 from '../../portfolio-assets/Chain3.JPG'
import chain4 from '../../portfolio-assets/Chain4.JPG'
import crayon1 from '../../portfolio-assets/Crayon1.JPG'
import crayon2 from '../../portfolio-assets/Crayon2.JPG'
import dino1 from '../../portfolio-assets/Dino1.jpg'
import final1 from '../../portfolio-assets/Final Series 1.jpg'
import final2 from '../../portfolio-assets/Final Series 2.jpg'
import final3 from '../../portfolio-assets/Final Series 3.jpg'
import final4 from '../../portfolio-assets/Final Series 4.jpg'
import final5 from '../../portfolio-assets/Final Series 5.jpg'
import final6 from '../../portfolio-assets/Final Series 6.jpg'
import final7 from '../../portfolio-assets/Final Series 7.jpg'
import final8 from '../../portfolio-assets/Final Series 8.jpg'
import final9 from '../../portfolio-assets/Final Series 9.jpg'
import final10 from '../../portfolio-assets/Final Series 10.jpg'
import foil1 from '../../portfolio-assets/Foil1.jpg'
import foil2 from '../../portfolio-assets/Foil2.JPG'
import foil3 from '../../portfolio-assets/Foil3.JPG'
import foil4 from '../../portfolio-assets/Foil4.JPG'
import foil5 from '../../portfolio-assets/Foil5.JPG'
import foil6 from '../../portfolio-assets/Foil6.JPG'
import foil7 from '../../portfolio-assets/Foil7.JPG'
import foil8 from '../../portfolio-assets/Foil8.JPG'
import glasses from '../../portfolio-assets/Glasses.jpg'
import lego1 from '../../portfolio-assets/Lego1.JPG'
import lego2 from '../../portfolio-assets/Lego2.JPG'
import lego3 from '../../portfolio-assets/Lego 3.jpg'
import lego4 from '../../portfolio-assets/Multiples 3.jpg'
import oliver1 from '../../portfolio-assets/Oliver1_16-9.jpg'
import oliver2 from '../../portfolio-assets/Oliver2_16-9.jpg'
import oliver3 from '../../portfolio-assets/Oliver3.JPG'
import paper1 from '../../portfolio-assets/Paper1.JPG'
import paper2 from '../../portfolio-assets/Paper2.jpg'
import pencils1 from '../../portfolio-assets/Pencils1.jpg'
import pencils2 from '../../portfolio-assets/Pencils2.jpg'
import prism1 from '../../portfolio-assets/Prism1.jpg'
import prism2 from '../../portfolio-assets/Prism2.jpg'
import tinsel from '../../portfolio-assets/Tinsel1.jpg'

const BitsPieces = () => {
    return (
        <div className="page-div">
            <h1 class="gallery-title">Bits and Pieces</h1>
            <div className="page-content">
                <div className="gallery-div">
                    <TwoImageRow imgs={[buffalo1, chain4]}/>
                    
                    
                    
                    <ThreeImageRow img1={foil5} img2={foil6} img3={foil7}/>
                    <TwoImageRow imgs={[foil1, foil3]}/>
                    <ThreeImageRow img1={foil2} img2={foil8} img3={foil4}/>
                    <TwoImageRow imgs={[chain1, prism2]}/>
                    <ThreeImageBlock img1={prism1} img2={paper1} img3={lego1} reverse={true}/>
                    <TwoImageRow imgs={[oliver1, oliver2]}/>
                    <OneImageRow img={car4} />
                    <ThreeImageBlock img1={car1} img2={car2} img3={car3}/>
                    <TwoImageRow imgs={[chain2, chain3]}/>
                    <ThreeImageRow img1={lego2} img2={lego3} img3={lego4}/>
                    

                    <TwoImageRow imgs={[tinsel, paper2]}/>
                    <ThreeImageRow img1={glasses} img2={dino1} img3={oliver3}/>
                    
                    
                    <FourImageRow imgs={[crayon1, crayon2, pencils1, pencils2]}/>
                    
                    
                    
                </div>
                <div class='subsection'>
                    <hr/>
                    <h2 className="subhead">The Before and After Gallery</h2>
                </div>
                <div className="gallery-div">
                    <TwoImageRow imgs={[final3, final4]}/>
                    <TwoImageRow imgs={[final5, final6]}/>
                    <TwoImageRow imgs={[final8, final9]}/>
                    <TwoImageRow imgs={[final2, final7]}/>
                    <TwoImageRow imgs={[final1, final10]}/>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default BitsPieces;