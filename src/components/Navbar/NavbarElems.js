import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
	background-color: #f3f6f6;
	height: 100%;
	justify-content: center;
	padding-left: 0vw;
	margin-left: -5px;
	position: fixed;
  	bottom: 0;
  	width: 250px;
	display: none;
	overflow-wrap: break-word;
`;

export const NavLink = styled(Link)`
	display: block;
	text-decoration: none;
	height: 100%;
	cursor: pointer;
    text-align: left;
	&.active {
		color: var(--accent-color-1);
		opacity: 80%;
	}
	&.active:hover {
		color: var(--accent-color-1);
		opacity: 100%;
	}	
	overflow-wrap: break-word;
	width: 100%;
`;


export const NavMenu = styled.div`
	display: grid;
    grid: auto / auto;
	position: absolute;
	white-space: nowrap; 
	flex-wrap: wrap;
  	top: 10px;
    left: 50px;
	width: 100%;
`;

export const TopNav = styled.nav`
	background-color: #221f1f;
	width: 98vw;
	padding-left: 1vw;
	padding-right: 1vw;
	position: relative;
  	top: 0;
	display: block;
	box-shadow: 0px 0.5px 2px 1px rgba(34, 31, 31, 0.5);
`;

export const TopNavMenu = styled.div`
	display: flex;
	width: 98vw;
	white-space: nowrap; 
	flex-wrap: wrap;
	justify-content: right;
`;

export const TopNavLink = styled(Link)`
	display: block;
	text-decoration: none;
	height: 100%;
	cursor: pointer;
    text-align: left;
	&.active {
		color: #ebf2ff;
	}
	&.active:hover {
		color: #b8b7b4;
	}	
`;

export const InlineNavLink = styled(Link)`
	text-decoration: none;
	cursor: pointer;
    text-align: left;
	&.active {
		color: #012465;
	}
	&.active:hover {
		color: #01328D;
	}	
	overflow-wrap: break-word;
	width: 100%;
`;

let show = false;

export function showMenu() {
    let menu = document.getElementById("nav");
    let menu_bg = document.getElementById("menu-bg");
	let menu_button = document.getElementById("menu-button");

    if (show) {
        menu.style.display = "flex";
        menu_bg.style.display = "block";
		menu_button.style.rotate = "180deg";
        
        show = false;
    } else {
        menu.style.display = "none";
        menu_bg.style.display = "none";
		menu_button.style.rotate = "90deg";
        
        show = true;
    }
}