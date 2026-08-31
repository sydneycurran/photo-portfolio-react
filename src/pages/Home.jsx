import React from "react";
import './page-styles.css';
import stainedglassbg from "../assets/StainedGlassEditGrey.jpg";
import { InlineNavLink, NavLink } from "../components/Navbar/NavbarElems";
import GalleryCoverNav from "../components/GalleryCoverNav";
import { FiveImageRow, FourImageRow, OneImageRow, ThreeImageBlock, ThreeImageRow, TwoImageRow } from "../components/GalleryBlocks";
import Footer from '../components/Footer';

import petscover from "../portfolio-assets/Cosmo2.jpg";
import creativecover from "../portfolio-assets/BWFlower1.jpg";
import eventscover from "../portfolio-assets/Ribbons2.jpg";

const Home = () => {
    return (
        <div className="page-div">
            <div id="title-banner">
                <img src={stainedglassbg} id="home-bg-image" />
                <h1 class="page-title" id="home-title">Sydney Curran Photography </h1>
            </div>
            <div id="doc-block">
                <p className="doc-text">Did you and your dog meet me in the park?</p>
                <p className="doc-text"> <a href="mailto:sydneycurranphotography@gmail.com" id="doc-home-link">
                    Send me an email </a>
                    to see your pictures and check out <InlineNavLink id="doc-home-link" to="/doggos-of-chicago">
                    Doggos of Chicago</InlineNavLink>! </p>
            </div>
            <div className="page-content">
                
                <div id="creative-nav">
                    
                    <div className="portfolio-gall-cover">
                        <NavLink to="/creative" activeStyle>
                            <img src={creativecover} alt="Creative" className="gallery-cover-img" />
                        </NavLink>
                        <p className="portfolio-cover-title">Creative</p>
                    </div>
                    <div className="portfolio-gall-cover">
                        <NavLink to="/events" activeStyle>
                            <img src={eventscover} alt="Events" className="gallery-cover-img" />
                        </NavLink>
                        <p className="portfolio-cover-title">Events</p>
                    </div>
                    <div className="portfolio-gall-cover">
                        <NavLink to="/pets" activeStyle>
                            <img src={petscover} alt="Pets" className="gallery-cover-img" />
                        </NavLink>
                        <p className="portfolio-cover-title">Pets</p>
                    </div>
                </div>
                <div id="home-pad">
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default Home;