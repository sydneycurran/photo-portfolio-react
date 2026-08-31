import React from "react";
import "./page-styles.css";

import { FiveImageRow, FourImageRow, OneImageRow, ThreeImageBlock, ThreeImageRow, TwoImageRow } from "../components/GalleryBlocks";
import Footer from '../components/Footer';
import air1 from '../portfolio-assets/Air1.jpg'
import air2 from '../portfolio-assets/Air2.jpg'
import air3 from '../portfolio-assets/Air3.jpg'
import air4 from '../portfolio-assets/Air4.jpg'
import air5 from '../portfolio-assets/Air5.jpg'
import air6 from '../portfolio-assets/Air6.jpg'
import air7 from '../portfolio-assets/Air7.jpg'
import air8 from '../portfolio-assets/Air8.jpg'
import baseball1 from '../portfolio-assets/Baseball1.jpg'
import baseball2 from '../portfolio-assets/Baseball2.jpg'
import ctu from '../portfolio-assets/CTU1.jpg'
import dance1 from '../portfolio-assets/Dance1.jpg'
import fire1 from '../portfolio-assets/Fire1.jpg'
import fire2 from '../portfolio-assets/Fire2.jpg'
import fire3 from '../portfolio-assets/Fire3.jpg'
import fire4 from '../portfolio-assets/Fire4.jpg'
import fire5 from '../portfolio-assets/Fire5.jpg'
import fire6 from '../portfolio-assets/Fire6.jpg'
import fire7 from '../portfolio-assets/Fire7.jpg'
import fire8 from '../portfolio-assets/Fire8.jpg'
import fireman from '../portfolio-assets/Fireman1.jpg'
import firework from '../portfolio-assets/Firework1.jpg'
import games1 from '../portfolio-assets/Games1.jpg'
import games2 from '../portfolio-assets/Games2.jpg'
import grad1 from '../portfolio-assets/Grad1.jpg'
import grad2 from '../portfolio-assets/Grad2.jpg'
import iceskating1 from '../portfolio-assets/IceSkating1.jpg'
import iceskating2 from '../portfolio-assets/IceSkating2.jpg'
import iceskating3 from '../portfolio-assets/IceSkating3.jpg'
import iceskating4 from '../portfolio-assets/IceSkating4.jpg'
import iceskating5 from '../portfolio-assets/IceSkating5.jpg'
import iceskating6 from '../portfolio-assets/IceSkating6.jpg'
import iceskating7 from '../portfolio-assets/IceSkating7.jpg'
import lights1 from '../portfolio-assets/Lights1.jpg'
import lights2 from '../portfolio-assets/Lights2.jpg'
import lights3 from '../portfolio-assets/Lights3.jpg'
import marathon from '../portfolio-assets/Marathon.jpg'
import pennbaseball1 from '../portfolio-assets/PBaseball1.jpg'
import pennbaseball2 from '../portfolio-assets/PBaseball2.jpg'
import pennbaseball3 from '../portfolio-assets/PBaseball3.jpg'
import pennbaseball4 from '../portfolio-assets/PBaseball4.jpg'
import penngym1 from '../portfolio-assets/PGym1.jpg'
import penngym2 from '../portfolio-assets/PGym2.jpg'
import penngym3 from '../portfolio-assets/PGym3.jpg'
import penngym4 from '../portfolio-assets/PGym4.jpg'
import penngym5 from '../portfolio-assets/PGym5.jpg'
import penngym6 from '../portfolio-assets/PGym6.jpg'
import penngym7 from '../portfolio-assets/PGym7.jpg'
import penngym8 from '../portfolio-assets/PGym8.jpg'
import penngym9 from '../portfolio-assets/PGym9.jpg'
import penngym10 from '../portfolio-assets/PGym10.jpg'
import penngym11 from '../portfolio-assets/PGym11.jpg'
import penngym12 from '../portfolio-assets/PGym12.jpg'
import penngym13 from '../portfolio-assets/PGym13.jpg'
import penngym14 from '../portfolio-assets/PGym14.jpg'
import penngym15 from '../portfolio-assets/PGym15.jpg'
import pennsoftball1 from '../portfolio-assets/PSoftball1.jpg'
import pennsoftball2 from '../portfolio-assets/PSoftball2.jpg'
import pennsoftball3 from '../portfolio-assets/PSoftball3.jpg'
import pennsoftball4 from '../portfolio-assets/PSoftball4.jpg'
import pennsoftball5 from '../portfolio-assets/PSoftball5.jpg'
import pita1 from '../portfolio-assets/Pita1.jpg'
import pita2 from '../portfolio-assets/Pita2.jpg'
import pita3 from '../portfolio-assets/Pita3.jpg'
import pride1 from '../portfolio-assets/Pride1.jpg'
import pride2 from '../portfolio-assets/Pride2.jpg'
import pride3 from '../portfolio-assets/Pride3.jpg'
import puppy1 from '../portfolio-assets/Puppy1.jpg'
import ribbons1 from '../portfolio-assets/Ribbons1.jpg'
import ribbons2 from '../portfolio-assets/Ribbons2.jpg'
import synagogue1 from '../portfolio-assets/Synagogue1.jpg'
import synagogue2 from '../portfolio-assets/Synagogue2.jpg'
import synagogue3 from '../portfolio-assets/Synagogue3.jpg'
import synagogue4 from '../portfolio-assets/Synagogue4.jpg'
import synagogue5 from '../portfolio-assets/Synagogue5.jpg'
import synagogue6 from '../portfolio-assets/Synagogue6.jpg'
import synagogue7 from '../portfolio-assets/Synagogue7.jpg'
import thanksgiving1 from '../portfolio-assets/Thanksgiving1.jpg'
import thanksgiving2 from '../portfolio-assets/Thanksgiving2.jpg'
import thanksgiving3 from '../portfolio-assets/Thanksgiving3.jpg'
import thanksgiving4 from '../portfolio-assets/Thanksgiving4.jpg'
import thanksgiving5 from '../portfolio-assets/Thanksgiving5.jpg'
import trapeeze from '../portfolio-assets/Trapeeze.jpg'
import turtle1 from '../portfolio-assets/Turtle1.jpg'
import turtle2 from '../portfolio-assets/Turtle2.jpg'
import turtle3 from '../portfolio-assets/Turtle3.jpg'
import turtle4 from '../portfolio-assets/Turtle4.jpg'
import turtle5 from '../portfolio-assets/Turtle5.jpg'
import turtle6 from '../portfolio-assets/Turtle6.jpg'

const Events = () => {
    return (
        <div className="page-div"> 
            <h1 class="gallery-title">Events</h1>
            <div className="page-content">
                <div className="gallery-div">
                    <ThreeImageRow img1={turtle1} img2={turtle2} img3={turtle3} />
                    <ThreeImageBlock img1={turtle6} img2={turtle4} img3={turtle5} />
                    <TwoImageRow imgs={[air1, air2]} />
                    <TwoImageRow imgs={[air3, air4]} />
                    <ThreeImageRow img1={air6} img2={air7} img3={air8} />
                    <TwoImageRow imgs={[trapeeze, marathon]} />
                    <ThreeImageBlock img1={pita3} img2={pita2} img3={pita1} /> 
                    <TwoImageRow imgs={[fire2, fire1]} />
                    <ThreeImageBlock img1={fire8} img2={fire4} img3={fire6} />
                    <ThreeImageRow img1={fire3} img2={fire5} img3={fireman} /> 
                    <TwoImageRow imgs={[thanksgiving3, thanksgiving5]} />                  
                    <ThreeImageBlock img1={thanksgiving4} img2={thanksgiving2} img3={thanksgiving1} />
                    <TwoImageRow imgs={[ribbons1, ribbons2]} />
                    <ThreeImageRow img1={lights1} img2={lights2} img3={lights3} />
                    
                    <TwoImageRow imgs={[puppy1, grad1]} />
                    <ThreeImageRow img1={synagogue1} img2={synagogue2} img3={synagogue7} />
                    <FourImageRow imgs={[synagogue3, synagogue4, synagogue5, synagogue6]} />
                    <ThreeImageBlock img1={pride1} img2={pride2} img3={pride3} reverse={true}/>
                    <FourImageRow imgs={[ctu, dance1, games1, games2]} />
                    <ThreeImageRow img1={grad2} img2={firework} img3={air5} />
                    
                </div>
                <div class='subsection'>
                    <hr/>
                    <h2 className="subhead">Athletics</h2>
                </div>
                <div className="gallery-div">
                    
                    <TwoImageRow imgs={[penngym12, penngym14]} />
                    <ThreeImageBlock img1={penngym9} img2={penngym8} img3={penngym10} />
                    <TwoImageRow imgs={[penngym6, penngym13]} />
                    <ThreeImageRow img1={penngym2} img2={penngym3} img3={penngym11} />
                    <TwoImageRow imgs={[penngym7, penngym15]} />
                    <ThreeImageRow img1={penngym1} img2={penngym4} img3={penngym5} />
                    
                    <TwoImageRow imgs={[pennbaseball2, pennbaseball3]}/>
                    <TwoImageRow imgs={[pennbaseball4, pennbaseball1]}/>
                    <ThreeImageBlock img1={pennsoftball2} img2={pennsoftball3} img3={pennsoftball4} />
                    <TwoImageRow imgs={[pennsoftball1, pennsoftball5]} />
                    <ThreeImageRow img1={iceskating4} img2={iceskating5} img3={iceskating6} />
                    <TwoImageRow imgs={[iceskating1, iceskating3]} />
                    <TwoImageRow imgs={[iceskating2, iceskating7]} />
                    
                    
                </div>
            </div>
            
            <Footer />
        </div>
    )
};

export default Events;