import Image from 'next/image';
import thomsonLogo from '../../../public/assets/Thomson_Reuters_logo.png';
import thomsonLogoDark from '../../../public/assets/thomsonreutersdark.png';
import johnDeereLogo from '../../../public/assets/johndeere.png';
import benfattoLogo from '../../../public/assets/benfatto-logo.png';
import nissanLogo from '../../../public/assets/nissan.png';
import nissanLogoDark from '../../../public/assets/nissandark.png';
import viracoposLogo from '../../../public/assets/viracopos.png';
import embraerLogo from '../../../public/assets/embraer.png';

import companyscss from '../css/companys.css'

export default function Companys({ isDarkTheme }) {
    return (
        <section id="companys">
            <div className="companys">
                <h3 className="title">
                    Empresas em que já trabalhei e/ou estive em projetos relacionados.
                </h3>
                <div className="company-logos">
                    <a href="https://www.thomsonreuters.com" rel="noopener noreferrer" target="_blank">
                        <div className="image-container">
                            <Image
                                src={isDarkTheme ? thomsonLogoDark : thomsonLogo}
                                alt="Thomson Reuters Logo"
                                width={400}
                            />
                        </div>
                    </a>
                    <a href="https://benfatto.net.br/" rel="noopener noreferrer" target="_blank">
                        <div className="image-container">
                            <Image src={benfattoLogo} alt="Benfatto Logo" width={200} />
                        </div>
                    </a>
                    <a href="https://www.deere.com.br/pt/index.html" rel="noopener noreferrer" target="_blank">
                        <div className="image-container">
                            <Image src={johnDeereLogo} alt="John Deere Logo" width={200} />
                        </div>
                    </a>
                    <a href="https://www.nissan.com.br/" rel="noopener noreferrer" target="_blank">
                        <div className="image-container">
                            <Image
                                src={isDarkTheme ? nissanLogoDark : nissanLogo}
                                alt="Nissan Logo"
                                width={150}
                            />
                        </div>
                    </a>
                    <a href="https://www.viracopos.com/" rel="noopener noreferrer" target="_blank">
                        <div className="image-container">
                            <Image src={viracoposLogo} alt="Viracopos Logo" width={200} />
                        </div>
                    </a>
                    <a href="https://embraer.com/br/pt" rel="noopener noreferrer" target="_blank">
                        <div className="image-container">
                            <Image src={embraerLogo} alt="Embraer Logo" width={300} />
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}
