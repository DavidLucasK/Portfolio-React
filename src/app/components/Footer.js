import footercss from '../css/footer.css'
import FooterIcons from './FooterIcons';

export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer__content">
        <h2>Entre em contato</h2>
        <div className="footer__contact">
          <FooterIcons/>
          <p className="footer__copyright">
            © 2024 David Lucas. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
