import Image from 'next/image';

//Imagem e css da imagem
import logoImg from "../../../public/assets/Logo.png"
import logocss from "../css/logo.css"; //Está sendo usado sim!

export default function Logo() {
    return(
        <a href="/">
          <Image src={logoImg} 
          className="logo-navbar" 
          alt="Logo"/>
        </a>
    )
}