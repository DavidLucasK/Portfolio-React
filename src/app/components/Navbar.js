import Logo from "./Logo";
import NavbarLinks from "./NavbarLinks";

import navbarcss from "../css/navbar.css";//Está sendo usado sim!

export default function Navbar() {
    return(
    <nav className="navbar">
      <div className="navbar__content">
        <Logo />
        <NavbarLinks />
      </div>
  </nav>
    )
}