import React from "react";
import Footer from '../../components/Footer';
import { TwoImageRow, ThreeImageBlock, OneImageRow, ThreeImageRow, FourImageRow, FiveImageRow } from "../../components/GalleryBlocks";


import faunab1 from '../../portfolio-assets/FaunaB1.JPG'
import faunab2 from '../../portfolio-assets/FaunaB2.JPG'
import faunab3 from '../../portfolio-assets/FaunaB3.JPG'
import faunab4 from '../../portfolio-assets/FaunaB4.JPG'
import faunab5 from '../../portfolio-assets/FaunaB5.JPG'
import faunab7 from '../../portfolio-assets/FaunaB7.JPG'
import faunab8 from '../../portfolio-assets/FaunaB8.jpg'
import faunai1 from '../../portfolio-assets/FaunaI1.JPG'
import faunai2 from '../../portfolio-assets/FaunaI2.JPG'
import faunai3 from '../../portfolio-assets/FaunaI3.JPG'
import faunai4 from '../../portfolio-assets/FaunaI4.JPG'
import faunai5 from '../../portfolio-assets/FaunaI5.jpg'
import faunak1 from '../../portfolio-assets/FaunaK1.JPG'
import faunal1 from '../../portfolio-assets/FaunaL1.JPG'
import faunal2 from '../../portfolio-assets/FaunaL2.JPG'
import faunal3 from '../../portfolio-assets/FaunaL3.jpg'
import faunal4 from '../../portfolio-assets/FaunaL4.jpg'
import faunam1 from '../../portfolio-assets/FaunaM1.JPG'
import faunam2 from '../../portfolio-assets/FaunaM2.JPG'
import faunama1 from '../../portfolio-assets/FaunaMa1.jpg'
import faunama2 from '../../portfolio-assets/FaunaMa2.jpg'
import faunap1 from '../../portfolio-assets/FaunaP1.JPG'
import faunap2 from '../../portfolio-assets/FaunaP2.JPG'
import faunarp1 from '../../portfolio-assets/FaunaRP1.JPG'
import faunarp2 from '../../portfolio-assets/FaunaRP2.JPG'
import faunarp3 from '../../portfolio-assets/FaunaRP3.JPG'
import faunarp4 from '../../portfolio-assets/FaunaRP4.JPG'
import faunash1 from '../../portfolio-assets/FaunaSH1.JPG'
import faunash2 from '../../portfolio-assets/FaunaSH2.JPG'
import faunasq1 from '../../portfolio-assets/FaunaSq1.JPG'
import faunasq2 from '../../portfolio-assets/FaunaSq2.JPG'
import faunasq3 from '../../portfolio-assets/FaunaSq3.JPG'
import faunasq4 from '../../portfolio-assets/FaunaSq4.JPG'
import faunat1 from '../../portfolio-assets/FaunaT1.JPG'
import faunat2 from '../../portfolio-assets/FaunaT2.JPG'
import faunat3 from '../../portfolio-assets/FaunaT3.JPG'
import faunat4 from '../../portfolio-assets/FaunaT4.JPG'
import faunat5 from '../../portfolio-assets/FaunaT5.JPG'
import faunat6 from '../../portfolio-assets/FaunaT6.JPG'
import faunat7 from '../../portfolio-assets/FaunaT7.JPG'
import faunaw1 from '../../portfolio-assets/FaunaW1.JPG'

import butterfly from '../../portfolio-assets/Butterfly1.jpg'
import florab1 from '../../portfolio-assets/FloraB1.JPG'
import florag1 from '../../portfolio-assets/FloraG1.JPG'
import florag2 from '../../portfolio-assets/FloraG2.JPG'
import florag3 from '../../portfolio-assets/FloraG3.JPG'
import florag4 from '../../portfolio-assets/FloraG4.JPG'
import florao1 from '../../portfolio-assets/FloraO1.JPG'
import florao2 from '../../portfolio-assets/FloraO2.JPG'
import florao3 from '../../portfolio-assets/FloraO3_V.JPG'
import florao4 from '../../portfolio-assets/FloraO4.JPG'
import florao5 from '../../portfolio-assets/FloraO5.JPG'
import florap1 from '../../portfolio-assets/FloraP1.JPG'
import florap3 from '../../portfolio-assets/FloraP3.JPG'
import florap4 from '../../portfolio-assets/FloraP4.JPG'
import florap6 from '../../portfolio-assets/FloraP6.JPG'
import florap9 from '../../portfolio-assets/FloraP9.JPG'
import florap10 from '../../portfolio-assets/FloraP10.JPG'
import florap11 from '../../portfolio-assets/FloraP11.JPG'
import florap13 from '../../portfolio-assets/FloraP13.JPG'
import florap14 from '../../portfolio-assets/FloraP14.JPG'
import florap17 from '../../portfolio-assets/FloraP17.JPG'
import florap18 from '../../portfolio-assets/FloraP18.JPG'
import florap19 from '../../portfolio-assets/FloraP19.JPG'
import florap20 from '../../portfolio-assets/FloraP20.JPG'
import florap21 from '../../portfolio-assets/FloraP21.JPG'
import florap22 from '../../portfolio-assets/FloraP22.JPG'
import florav1 from '../../portfolio-assets/FloraV1.JPG'
import florav2 from '../../portfolio-assets/FloraV2.JPG'
import florav3 from '../../portfolio-assets/FloraV3.JPG'
import florav4 from '../../portfolio-assets/FloraV4.JPG'
import florav5 from '../../portfolio-assets/FloraV5.JPG'
import florav6 from '../../portfolio-assets/FloraV6.JPG'
import floraw1 from '../../portfolio-assets/FloraW1.JPG'
import floraw2 from '../../portfolio-assets/FloraW2.JPG'
import floraw3 from '../../portfolio-assets/FloraW3.JPG'
import floraw4 from '../../portfolio-assets/FloraW4.JPG'
import floraw5 from '../../portfolio-assets/FloraW5.JPG'
import floraw6 from '../../portfolio-assets/FloraW6.JPG'
import floraw7 from '../../portfolio-assets/FloraW7.JPG'
import floraw8 from '../../portfolio-assets/FloraW8_V.JPG'
import floraw9 from '../../portfolio-assets/FloraW9.JPG'
import floray1 from '../../portfolio-assets/FloraY1.JPG'
import floray2 from '../../portfolio-assets/FloraY2.JPG'
import floray3 from '../../portfolio-assets/FloraY3.JPG'
import floray4 from '../../portfolio-assets/FloraY4.JPG'
import floray5 from '../../portfolio-assets/FloraY5.JPG'


const FloraFauna = () => {
	return (
		<div className="page-div">
			<h1 class="gallery-title">Flora and Fauna</h1>
			<div className="page-content">
				<div className="gallery-div">
					<TwoImageRow imgs={[floraw3, floraw4]}/>				
					<ThreeImageRow img1={floraw1} img2={floraw5} img3={floraw6} />
					<FiveImageRow imgs={[florap11, florap19, florap17, florap20, florap6]}/>
					<FourImageRow imgs={[florap10, florap14, florap21, florap22]}/>
					<ThreeImageBlock img1={florap1} img2={florap3} img3={florap18} reverse={true}/>
					<TwoImageRow imgs={[florap9, florav5]}/>
					<ThreeImageRow img1={florao3} img2={florap13} img3={floraw8} />
					<FourImageRow imgs={[floraw7, florao4, florao5, floray5]}/>
					<ThreeImageRow img1={florao1} img2={florao2} img3={floray1} />
					<ThreeImageBlock img1={florag2} img2={florag4} img3={florag3} />					
					<TwoImageRow imgs={[florav1, florav2]}/>
					<ThreeImageRow img1={florav4} img2={floray4} img3={florap4} />
					<TwoImageRow imgs={[florav3, florav6]}/>
					
					<hr/>

					<OneImageRow img={butterfly} />
					<ThreeImageBlock img1={faunasq1} img2={faunasq2} img3={faunasq3} />
					<TwoImageRow imgs={[faunasq4, faunab7]}/>
					<ThreeImageRow img1={faunab8} img2={faunab5} img3={faunat6} />
					<FourImageRow imgs={[faunai5, faunai1, faunai2, faunai4]}/>
					<ThreeImageRow img1={faunab1} img2={faunab2} img3={faunab3} />
					<TwoImageRow imgs={[faunap1, faunap2]}/>
					<ThreeImageRow img1={faunat1} img2={faunat4} img3={faunat2} />
					<TwoImageRow imgs={[faunama1, faunama2]}/>
					<ThreeImageBlock img1={faunat7} img2={faunat3} img3={faunat5} />
					<TwoImageRow imgs={[faunash1, faunash2]}/>
					<ThreeImageBlock img1={faunal2} img2={faunal3} img3={faunal4} reverse={true}/>
					<FourImageRow imgs={[faunaw1, faunam2, faunam1, faunak1]}/>
					<ThreeImageBlock img1={faunarp4} img2={faunarp3} img3={faunarp2} />
					


					

				</div>
			</div>
			<Footer />
		</div>
	)
};

export default FloraFauna;