import Image from 'next/image';

import imgLinkedin from '../assets/linkedin-invert.png'
import imgGit from '../assets/git-icon.png'
import imgInsta from '../assets/insta-icon.png'
import imgCurriculo from '../assets/curriculo.png'

import aboutcss from './css/about.css'; // Está sendo usado sim!

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about__left">
        <h2 className="secundary-title">Além do código: Quem sou eu?</h2>
        <p>
          Que tal se conectar comigo nas redes sociais abaixo e saber mais sobre
          meu trabalho?
        </p>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/david-lucas-a21208176/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                src={imgLinkedin}
                className="mini-icon"
                alt="Linkedin"
              />
            </a>
            <p className="nome-icon">Linkedin</p>
          </li>
          <li>
            <a
              className="git"
              href="https://github.com/DavidLucasK"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                src={imgGit}
                alt="GitHub"
                className="mini-icon"
              />
            </a>
            <p className="nome-icon">GitHub</p>
          </li>
          <li>
            <a
              href="https://www.instagram.com/david.lucask/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                src={imgInsta}
                alt="Instagram"
                className="mini-icon"
              />
            </a>
            <p className="nome-icon">Instagram</p>
          </li>
          <li>
            <a
              href="/assets/Curriculo 2024.pdf"
              download="Currículo"
            >
              <Image
                src={imgCurriculo}
                alt="Currículo"
                className="mini-icon"
              />
            </a>
            <p className="nome-icon">Currículo</p>
          </li>
        </ul>
      </div>
      <div className="about__right">
        <h3 className="tertiary-title mb-m">
          Desenvolvedor curioso e apaixonado por tecnologia e soluções
        </h3>
        <p>
          Meu nome é David Lucas e sou desenvolvedor, sou apaixonado por
          tecnologia e tenho experiência em desenvolvimento de aplicações intuitivas
          e soluções criativas. Gosto de solucionar problemas de jeitos criativos,
          interfaces visualmente atraentes e que sejam focadas na experiência do usuário.
        </p>
        <p>
          Adoro desafios, desde melhorar algo que já exista ou até mesmo criar
          algo completamente novo e encontrar alguma maneira de deixar as coisas
          automáticas.
        </p>
      </div>
    </section>
  );
}
