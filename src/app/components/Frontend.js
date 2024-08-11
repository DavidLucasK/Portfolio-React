import frontendcss from '../css/frontend.css'
import FrontendItens from './FrontendItens';

export default function Frontend() {
    return (
        <section id="techs" className="frontend">
            <div className="frontend__content">
                <h2 className="tertiary-title">Hard Skills</h2>
                <p className="description">
                    Tecnologias e outras ferramentas que já utilizei e utilizo em meus projetos e nas empresas em que trabalhei.
                </p>
                <h3 className="quartiary-title">Frontend</h3>
                <FrontendItens/>
            </div>
        </section>
    );
}
