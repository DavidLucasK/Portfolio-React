import backendcss from '../css/backend.css'; // Está usando sim!
import BackendItens from './BackendItens';

export default function Backend() {
    return (
        <section id="backend" className="backend">
            <div className="backend__content" data-anime="right">
                <h3 className="quintiary-title">Backend e outras ferramentas que já utilizei nos projetos</h3>
                <BackendItens/>
            </div>
        </section>
    )
}
