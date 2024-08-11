import Image from 'next/image'

export default function FooterIcons() {
    return(
        <ul>
            <li>
              <a href="mailto:davidlucasfr70@gmail.com">
                <Image src="/assets/mail.png" alt="mail" width={40} height={40} quality={100} />
              </a>
            </li>
            <li>
              <a href="https://wa.me/+5519981973600?text=Ol%C3%A1%2C+vi+seu+portf%C3%B3lio+e+gostaria+de+conversar+com+voc%C3%AA">
                <Image src="/assets/whatsapp.png" alt="whats" width={40} height={40} quality={100} />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/david-lucas-a21208176/">
                <Image src="/assets/linkedin-invert.png" alt="Linkedin" width={40} height={40} quality={100} />
              </a>
            </li>
            <li>
              <a className="git" href="https://github.com/DavidLucasK">
                <Image src="/assets/github-invert.png" alt="GitHub" width={40} height={40} quality={100} />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/david.lucask/">
                <Image src="/assets/instagram-invert.png" alt="Instagram" width={40} height={40} quality={100} />
              </a>
            </li>
            <li>
              <a href="/assets/Curriculo%202024.pdf" download="Currículo">
                <Image src="/assets/curriculo.png" alt="Currículo" width={40} height={40} quality={100} />
              </a>
            </li>
          </ul>
    )
}