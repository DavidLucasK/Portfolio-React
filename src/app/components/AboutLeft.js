import Image from 'next/image';

import imgLinkedin from '../../../public/assets/linkedin-invert.png';
import imgGit from '../../../public/assets/git-icon.png';
import imgInsta from '../../../public/assets/insta-icon.png';
import imgCurriculo from '../../../public/assets/curriculo.png';

export default function AboutLeft() {
    return (
        <div className="about__left">
            <h2>Além do código: Quem sou eu?</h2>
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
                    width={64}
                    height={64}
                    quality={100}
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
                    width={64}
                    height={64}
                    quality={100}
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
                    width={64}
                    height={64}
                    quality={100}
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
                    width={64}
                    height={64}
                    quality={100}
                  />
                </a>
                <p className="nome-icon">Currículo</p>
              </li>
            </ul>
        </div>
    );
}
