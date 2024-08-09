import navbarLinks from "./css/navbarlinks.css";

export default function NavbarLinks() {
    return(
        <ul className="navbar__links">
          <li><a href="#header">Início</a></li>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#skills">Habilidades</a></li>
          <li><a href="#frontend">Tecnologias</a></li>
          <li><a href="#projects">Projetos</a></li>
          <li><a href="#footer">Contato</a></li>
        </ul>
    )
}