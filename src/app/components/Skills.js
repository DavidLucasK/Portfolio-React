import Image from 'next/image';

import skillscss from '../css/skills.css'// Está sendo usado sim!

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills__content">
        <h2 className="tertiary-title">Caixa de Ferramentas</h2>
        <p className="description">
          Aqui estão algumas habilidades e ferramentas que domino e que me permitem
          criar soluções criativas e funcionais.
        </p>
        <ul>
          <li className="skills__item">
            <div className="image-container">
              <Image src="/assets/automation.png" alt="Automações" width={36} height={36} quality={100} />
            </div>
            <h3>Automações</h3>
            <p>
              Gosto de criar automações para deixar minhas tarefas mais simples,
              Costumo usar Python e IA para isso.
            </p>
          </li>
          <li className="skills__item">
            <div className="image-container">
              <Image src="/assets/notebook.png" alt="Desenvolvimento Web" width={36} height={36} quality={100} />
            </div>
            <h3>Desenvolvimento Web</h3>
            <p>
              Experiência em desenvolvimento com foco em tecnologias modernas.
            </p>
          </li>
          <li className="skills__item">
            <div className="image-container">
              <Image src="/assets/designer-de-web.png" alt="Web Design" width={36} height={36} quality={100} />
            </div>
            <h3>Web Design</h3>
            <p>
              Habilidade em criar layouts modernos e responsivos, com foco na
              experiência do usuário.
            </p>
          </li>
          <li className="skills__item">
            <div className="image-container">
              <Image src="/assets/ideia.png" alt="UX/UI Design" width={36} height={36} quality={100} />
            </div>
            <h3>UX/UI Design</h3>
            <p>
              Conhecimentos em design de interface e experiência do usuário
              visualmente atraentes e intuitivas.
            </p>
          </li>
          <li className="skills__item">
            <div className="image-container">
              <Image src="/assets/github.svg" alt="Gerenciamento de versões" width={36} height={36} quality={100} />
            </div>
            <h3>Gerenciamento de versões</h3>
            <p>
              Experiência em ferramentas de gerenciamento de versão para
              controle de projetos.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
