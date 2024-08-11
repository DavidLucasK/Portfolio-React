'use client' //para funcionar o hook

import { useEffect } from 'react';
import Image from 'next/image';

//Function de escrever o cargo
import { typeWriter } from '../utils/typeWriter';
import { goTo } from '../utils/goTo';

//Estilização e imagens
import headercss from '../css/header.css';

//Componentes filhos
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';

export default function Header() {
  //Hook para chamar manipular o DOM
  useEffect(() => {
    const titulo = document.querySelector('.cargo');
    const textos = [
      '', //Colocado pois a função estava duplicando as letras do primeiro item do array pelo tempo
      'Backend',
      'Frontend',
      'FullStack'
    ];

    if (titulo) {
      typeWriter(titulo, textos);
    }

    goTo();
  });

  return (
    <header id="header">
      <HeaderLeft />
      <HeaderRight />
    </header>
  );
}
