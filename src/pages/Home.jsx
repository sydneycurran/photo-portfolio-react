import React from "react";
import './page-styles.css';
import stainedglassbg from "../assets/StainedGlassEditGrey.jpg";
import { InlineNavLink, NavLink } from "../components/Navbar/NavbarElems";
import GalleryCoverNav from "../components/GalleryCoverNav";
import image1 from "../assets/DSC_0294.jpg"
import doggo1 from "../assets/DSC_0224.jpg"
import doggo2 from "../assets/DSC_0278.jpg"
import doggo4 from "../assets/DSC_0301.jpg"
import doggo6 from "../assets/DSC_0322.jpg"
import doggo7 from "../assets/DSC_0325.jpg"
import { FiveImageRow, FourImageRow, OneImageRow, ThreeImageBlock, ThreeImageRow, TwoImageRow } from "../components/GalleryBlocks";
import Footer from '../components/Footer';

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
                            <img src={image1} alt="Creative" className="gallery-cover-img" />
                        </NavLink>
                        <p className="portfolio-cover-title">Creative</p>
                    </div>
                    <div className="portfolio-gall-cover">
                        <NavLink to="/events" activeStyle>
                            <img src={image1} alt="Events" className="gallery-cover-img" />
                        </NavLink>
                        <p className="portfolio-cover-title">Events</p>
                    </div>
                    <div className="portfolio-gall-cover">
                        <NavLink to="/pets" activeStyle>
                            <img src={image1} alt="Pets" className="gallery-cover-img" />
                        </NavLink>
                        <p className="portfolio-cover-title">Pets</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default Home;