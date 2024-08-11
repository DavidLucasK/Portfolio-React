import Image from 'next/image'

export default function BackendItens() {
    return(
    <ul>
        <li className="backend__item">
            <div className="image-container">
                <Image src="/assets/csharp.png" alt="CSharp" width={36} height={36} quality={100} />
            </div>
            <h3>C#</h3>
            <p>Básico</p>
        </li>
        <li className="backend__item">
            <div className="image-container">
                <Image src="/assets/python.png" alt="Python" width={36} height={36} quality={100} />
            </div>
            <h3>Python</h3>
            <p>Intermediário</p>
        </li>
        <li className="backend__item">
            <div className="image-container">
                <Image src="/assets/sql.png" alt="SQL" width={36} height={36} quality={100} />
            </div>
            <h3>SQL</h3>
            <p>Avançado</p>
        </li>
        <li className="backend__item">
            <div className="image-container">
                <Image src="/assets/node-js.png" alt="NodeJs" width={36} height={36} quality={100} />
            </div>
            <h3>NodeJs</h3>
            <p>Intermediário</p>
        </li>
        <li className="backend__item">
            <div className="image-container">
                <Image src="/assets/jenkins.png" alt="Jenkins" width={36} height={36} quality={100} />
            </div>
            <h3>Jenkins</h3>
            <p>Intermediário</p>
        </li>
        <li className="backend__item">
            <div className="image-container">
                <Image src="/assets/postman.png" alt="Postman" width={36} height={36} quality={100} />
            </div>
            <h3>Postman</h3>
            <p>Básico</p>
        </li>
        <li className="backend__item">
            <div className="image-container">
                <Image src="/assets/soap.png" alt="SoapUI" width={36} height={36} quality={100} />
            </div>
            <h3>SoapUI</h3>
            <p>Básico</p>
        </li>
        <li className="backend__item">
            <div className="image-container">
                <Image src="/assets/jira.png" alt="Jira" width={36} height={36} quality={100} />
            </div>
            <h3>Jira</h3>
            <p>Avançado</p>
        </li>
        <li className="backend__item">
            <div className="image-container">
                <Image src="/assets/datadog.png" alt="DataDog" width={36} height={36} quality={100} />
            </div>
            <h3>DataDog</h3>
            <p>Básico</p>
        </li>
        <li className="backend__item">
            <div className="image-container">
                <Image src="/assets/aws.png" alt="AWS" width={36} height={36} quality={100} />
            </div>
            <h3>AWS</h3>
            <p>Básico</p>
        </li>
    </ul>
    )
}