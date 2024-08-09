import Logo from "./Logo";
import NavbarLinks from "./NavbarLinks";

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