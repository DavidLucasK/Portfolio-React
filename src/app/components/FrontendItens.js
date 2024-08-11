import Image from 'next/image';

export default function FrontendItens() {
    return(
        <ul>
                    <li className="frontend__item">
                        <div className="image-container">
                            <Image src="/assets/html-5.png" alt="HTML" width={36} height={36} quality={100} />
                        </div>
                        <h3>HTML</h3>
                        <p>Avançado</p>
                    </li>
                    <li className="frontend__item">
                        <div className="image-container">
                            <Image src="/assets/css-3.png" alt="CSS" width={36} height={36} quality={100} />
                        </div>
                        <h3>CSS</h3>
                        <p>Avançado</p>
                    </li>
                    <li className="frontend__item">
                        <div className="image-container">
                            <Image src="/assets/js.png" alt="Javascript" width={36} height={36} quality={100} />
                        </div>
                        <h3>Javascript</h3>
                        <p>Intermediário</p>
                    </li>
                    <li className="frontend__item">
                        <div className="image-container">
                            <Image src="/assets/ts.png" alt="Typescript" width={36} height={36} quality={100} />
                        </div>
                        <h3>Typescript</h3>
                        <p>Intermediário</p>
                    </li>
                    <li className="frontend__item">
                        <div className="image-container">
                            <Image src="/assets/react.svg" alt="React" width={50} height={50} quality={100} />
                        </div>
                        <h3>React</h3>
                        <p>Intermediário</p>
                    </li>
                    <li className="frontend__item">
                        <div className="image-container">
                            <Image src="/assets/nextjs.png" alt="NextJS" width={36} height={36} quality={100} />
                        </div>
                        <h3>NextJS</h3>
                        <p>Intermediário</p>
                    </li>
                    <li className="frontend__item">
                        <div className="image-container">
                            <Image src="/assets/tailwindcss.png" alt="Tailwind" width={36} height={36} quality={100} />
                        </div>
                        <h3>Tailwind</h3>
                        <p>Intermediário</p>
                    </li>
                    <li className="frontend__item">
                        <div className="image-container">
                            <Image src="/assets/figma.png" alt="Figma" width={36} height={36} quality={100} />
                        </div>
                        <h3>Figma</h3>
                        <p>Intermediário</p>
                    </li>
                </ul>
    )
}