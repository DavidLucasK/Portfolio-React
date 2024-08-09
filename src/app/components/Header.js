import Image from 'next/image';

import avatarImg from "../assets/avatar.png"
import headercss from "./css/header.css"; //Está sendo usado sim!

export default function Header() {
    return (
      <header>
          <div className="header__left">
            <h1>Olá! Meu nome é David Lucas e sou</h1>
            <h1 className="cargo">Desenvolvedor Fullstack</h1>
          </div>
          <div className="header__right">
            <a href="https://www.linkedin.com/in/david-lucas-a21208176/" rel="noopener noreferrer" target="_blank">
            <Image src={avatarImg} 
                className="header-img"
                alt="David Lucas" />
            </a>
          </div>
      </header>
    )
}