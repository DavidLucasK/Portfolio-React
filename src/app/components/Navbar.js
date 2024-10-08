import Logo from "./Logo";
import NavbarLinks from "./NavbarLinks";
import navbarcss from "../css/navbar.css"; // Está sendo usado sim!

export default function Navbar({ isDarkTheme, toggleTheme }) {
    return (
        <nav className="navbar">
            <div className="navbar__content">
                <Logo />
                <NavbarLinks isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
            </div>
        </nav>
    );
}
