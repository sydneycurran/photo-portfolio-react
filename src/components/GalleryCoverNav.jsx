import { NavLink } from "react-router-dom";

export default function GalleryCoverNav({imgsrc, gallerytitle="Title", dest="/"}) {
    return (
            <NavLink to={dest} activeStyle>
                <img src={imgsrc} alt={gallerytitle} className="gallery-cover-img" />
                <p className="gallery-cover-title">{gallerytitle}</p>
            </NavLink>
    )
}