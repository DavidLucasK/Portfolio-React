import '../css/mobile.css'; //Está usando sim
import MobileItens from './MobileItens';

export default function Mobile() {
  return (
    <section id="mobile" className="mobile">
      <div className="mobile__content max-width" data-anime="left">
        <h3 className="quintiary-title">Mobile</h3>
        <MobileItens/>
      </div>
    </section>
  )
}
