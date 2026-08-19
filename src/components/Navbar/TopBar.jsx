import { TopNavLink, showMenu, TopNav, TopNavMenu } from "./NavbarElems";
import whitelogo from "./Sydney Curran Logo White Translucent.png";
import './nav.css';

const TopNavbar = () => {
    return (
        <>
            <TopNav id="nav-top">
                <TopNavLink id="nav-logo" to="/" activeStyle>
                    <img height="100px" src={whitelogo} />
                </TopNavLink>
                <TopNavMenu id="top-nav-menu">
                    
                    <TopNavLink className="top-link menu-nav-link" to="/about" activeStyle>
                        About
                    </TopNavLink>
                    <TopNavLink className="top-link menu-nav-link" to="/creative" activeStyle>
                        Creative
                    </TopNavLink>
                    <TopNavLink className="top-link menu-nav-link" to="/events" activeStyle>
                        Events
                    </TopNavLink>
                    <TopNavLink className="top-link menu-nav-link" to="/pets" activeStyle>
                        Pets
                    </TopNavLink>
                </TopNavMenu>
            </TopNav>
        </>
    );
};

export default TopNavbar;