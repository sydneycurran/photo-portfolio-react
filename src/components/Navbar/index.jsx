import React from "react";
import { Nav, NavLink, NavMenu, showMenu } from "./NavbarElems";
import './nav.css'


const Navbar = () => {
	return (
		<>
            <div id="menu-bg" onClick={showMenu}/>
			<Nav id="nav">
				<NavMenu id="nav-menu">
                    <div id="menu-pad" />
					<NavLink className="menu-nav-link" onClick={showMenu} to="/" activeStyle>
						Home
					</NavLink>
					<NavLink className="menu-nav-link" onClick={showMenu} to="/about" activeStyle>
						About
					</NavLink>
					<NavLink className="menu-nav-link" onClick={showMenu} to="/creative" activeStyle>
						Creative
					</NavLink>
                    <NavLink className="menu-nav-link" onClick={showMenu} to="/events" activeStyle>
						Events
					</NavLink>
                    <NavLink className="menu-nav-link" onClick={showMenu} to="/pets" activeStyle>
						Pets
					</NavLink>
					<NavLink className="menu-nav-link" onClick={showMenu} to="/doggos-of-chicago" activeStyle>
						Doggos of <br/> Chicago
					</NavLink>
				</NavMenu>
			</Nav>
            <div id="button-div">
                <p onClick={showMenu} id="menu-button">|||</p>
            </div>
		</>
	);
};

export default Navbar;