'use client'

import '../css/navbarlinks.css'; // Importa o CSS corretamente em Next.js

import { useEffect } from 'react';
import Image from 'next/image';
import themeIcon from '../../../public/assets/theme.png';
import darkthemeIcon from '../../../public/assets/dark-theme.png';
import updateTheme from '../utils/updateTheme';

export default function NavbarLinks({ isDarkTheme, toggleTheme }) {
  useEffect(() => {
    // Aplica o tema baseado no estado inicial
    updateTheme(isDarkTheme);
  }, [isDarkTheme]);

  return (
    <ul className="navbar__links">
      <li><a href="#header">Início</a></li>
      <li><a href="#about">Sobre</a></li>
      <li><a href="#skills">Habilidades</a></li>
      <li><a href="#techs">Tecnologias</a></li>
      <li><a href="#projects">Projetos</a></li>
      <li><a href="#footer">Contato</a></li>
      <li>
        <div className="container-check">
          <input 
            type="checkbox" 
            id="dark-mode-toggle" 
            checked={isDarkTheme} 
            onChange={toggleTheme} 
            style={{ display: 'none' }} 
          />
          <Image
            src={isDarkTheme ? darkthemeIcon : themeIcon}
            alt="Theme Icon"
            id="checkbox-img"
            className="theme"
            onClick={toggleTheme}
            style={{ cursor: 'pointer' }}
            width={25}
            height={25}
          />
        </div>
      </li>
    </ul>
  );
}
