import Image from 'next/image';

import projectscss from '../css/projects.css'

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects__content" data-anime="left">
        <h2 className="secondary-title">Projetos em Destaque</h2>
        <p>Aqui estão alguns dos meus projetos mais recentes.</p>
      </div>
      <ul>
        <li data-anime="left">
          <div className="image">
            <a href="https://moviegen.vercel.app/" target="_blank" rel="noopener noreferrer">
              <Image src="/assets/movie-gen.png" alt="Escolhas de Filmes" width={567} height={340} quality={100} />
            </a>
          </div>
          <div className="projects__info">
            <h3 className="tertiary-title">Escolhas de Filmes</h3>
            <p>
              Desenvolvido para recomendações de filmes aleatórios para assistir.
              <br /> (Feito para facilitar as noites com a namorada rs)
            </p>
            <div className="techs-big">
              <Image src="/assets/html-5.png" alt="HTML5" width={36} height={36} />
              <Image src="/assets/css-3.png" alt="CSS3" width={36} height={36} />
              <Image src="/assets/js.png" alt="JavaScript" width={36} height={36} />
              <Image src="/assets/node-js.png" alt="Node.js" width={36} height={36} />
            </div>
            <p>*Usando API MovieDB</p>
            <a href="https://github.com/DavidLucasK/Movie-gen" target="_blank" rel="noopener noreferrer">Acessar Git</a>
          </div>
        </li>
        <li data-anime="right">
          <div className="image">
            <a href="https://loveuportfolio.vercel.app/" target="_blank" rel="noopener noreferrer">
              <Image src="/assets/loveupage.png" alt="LoveYouMa" width={567} height={340} quality={100} />
            </a>
          </div>
          <div className="projects__info">
            <h3 className="tertiary-title">LoveYouHoney</h3>
            <p>
              App web que fiz para minha namorada poder brincar e ser algo divertido entre a gente.
              <br />
              *Faz validações e requisições em tempo real com API feita por mim também.
            </p>
            <div className="techs-bigxl">
              <Image src="/assets/html-5.png" alt="HTML5" width={36} height={36} />
              <Image src="/assets/css-3.png" alt="CSS3" width={36} height={36} />
              <Image src="/assets/js.png" alt="JavaScript" width={36} height={36} />
              <Image src="/assets/node-js.png" alt="Node.js" width={36} height={36} />
              <Image src="/assets/postgresql.png" alt="PostgreSQL" width={36} height={36} />
              <Image src="/assets/supabase.png" alt="Supabase" width={36} height={36} />
            </div>
            <br/>
            <a href="https://github.com/DavidLucasK/TeAmoMaPortfolio" target="_blank" rel="noopener noreferrer">Acessar Git</a>
          </div>
        </li>
        <li data-anime="left">
          <div className="image">
            <a href="https://logindl.vercel.app/" target="_blank" rel="noopener noreferrer">
              <Image src="/assets/login.png" alt="Página de Login" width={567} height={340} quality={100} />
            </a>
          </div>
          <div className="projects__info">
            <h3 className="tertiary-title">Login</h3>
            <p>
              Página de login com validações em tempo real com banco de dados fazendo requisições GET e POST.
            </p>
            <div className="techs-bigxl">
              <Image src="/assets/html-5.png" alt="HTML5" width={36} height={36} />
              <Image src="/assets/css-3.png" alt="CSS3" width={36} height={36} />
              <Image src="/assets/js.png" alt="JavaScript" width={36} height={36} />
              <Image src="/assets/node-js.png" alt="Node.js" width={36} height={36} />
              <Image src="/assets/postgresql.png" alt="PostgreSQL" width={36} height={36} />
              <Image src="/assets/supabase.png" alt="Supabase" width={36} height={36} />
            </div>
            <br/>
            <a href="https://github.com/DavidLucasK/LoginPage" target="_blank" rel="noopener noreferrer">Acessar Git</a>
          </div>
        </li>
        <li data-anime="right">
          <div className="image">
            <a href="https://calendartasks.vercel.app/" target="_blank" rel="noopener noreferrer">
              <Image src="/assets/CalendarTasks.png" alt="Imagem do site de Calendário com Tasks" width={567} height={340} quality={100} />
            </a>
          </div>
          <div className="projects__info">
            <h3 className="tertiary-title">CalendarTasks</h3>
            <p>
              Calendário com design intuitivo e responsivo, permitindo fácil gerenciamento de eventos e navegação 
              entre datas em qualquer dispositivo. Utiliza cache para guardar informações.
            </p>
            <div className="techs">
              <Image src="/assets/html-5.png" alt="HTML5" width={36} height={36} />
              <Image src="/assets/css-3.png" alt="CSS3" width={36} height={36} />
              <Image src="/assets/js.png" alt="JavaScript" width={36} height={36} />
            </div>
            <br/>
            <a href="https://github.com/DavidLucasK/CalendarTasks" target="_blank" rel="noopener noreferrer">Acessar Git</a>
          </div>
        </li>
        <li data-anime="left">
          <div className="image">
            <a href="https://coinversor.vercel.app" target="_blank" rel="noopener noreferrer">
              <Image src="/assets/coinverter.png" alt="Cotação de Moedas" width={567} height={340} quality={100} />
            </a>
          </div>
          <div className="projects__info">
            <h3 className="tertiary-title">Cotação de moedas em tempo real</h3>
            <p>
              Sistema web simples para fazer conversões de moedas em tempo real.
              <br /> *Usando API ExchangeRate
            </p>
            <div className="techs-big">
              <Image src="/assets/html-5.png" alt="HTML5" width={36} height={36} />
              <Image src="/assets/css-3.png" alt="CSS3" width={36} height={36} />
              <Image src="/assets/js.png" alt="JavaScript" width={36} height={36} />
              <Image src="/assets/node-js.png" alt="Node.js" width={36} height={36} />
            </div>
            <br/>
            <a href="https://github.com/DavidLucasK/Youtube-Layout" target="_blank" rel="noopener noreferrer">Acessar Git</a>
          </div>
        </li>
        <li data-anime="right">
          <div className="image">
            <a href="https://todolistdl.vercel.app/" target="_blank" rel="noopener noreferrer">
              <Image src="/assets/ToDoList2.png" alt="ToDoList" width={567} height={340} quality={100} />
            </a>
          </div>
          <div className="projects__info">
            <h3 className="tertiary-title">ToDoList</h3>
            <p>
              ToDoList simples feita com HTML, CSS e JavaScript.
            </p>
            <div className="techs">
              <Image src="/assets/html-5.png" alt="HTML5" width={36} height={36} />
              <Image src="/assets/css-3.png" alt="CSS3" width={36} height={36} />
              <Image src="/assets/js.png" alt="JavaScript" width={36} height={36} />
            </div>
            <br/>
            <a href="https://github.com/DavidLucasK/ToDoList" target="_blank" rel="noopener noreferrer">Acessar Git</a>
          </div>
        </li>
        {/* <li data-anime="left">
        <div className="image">
            <a href="https://youtube-layout-davidlucask.vercel.app/" target="_blank" rel="noopener noreferrer">
            <Image src="/assets/youtube-layout.png" alt="Youtube" width={567} height={340} quality={100} />
            </a>
        </div>
        <div className="projects__info">
            <h3 className="tertiary-title">
            Recriação do layout do Youtube
            </h3>
            <p>
            Recriação do Layout do Youtube feito com React, NextJS e TailwindCSS.
            </p>
            <div className="techs">
            <Image src="/assets/react.svg" alt="React" width={40} height={40} />
            <Image src="/assets/nextjs.png" alt="Next.js" width={30} height={30} />
            <Image src="/assets/tailwindcss.png" alt="TailwindCSS" width={40} height={40} />
            </div>
            <p>
            *Desenvolvendo responsividade para mobile
            </p>
            <a href="https://github.com/DavidLucasK/Youtube-Layout" target="_blank" rel="noopener noreferrer">Acessar Git</a>
        </div>
        </li> */}

        <li data-anime="right">
        <div className="image">
            <a href="https://spotify-davidlucas.vercel.app/" target="_blank" rel="noopener noreferrer">
            <Image src="/assets/spotify.png" alt="Spotify" width={567} height={340} quality={100} />
            </a>
        </div>
        <div className="projects__info">
            <h3 className="tertiary-title">
            Recriação do layout do Spotify
            </h3>
            <p>
            Recriação do Layout do Spotify feito com React, NextJS e TailwindCSS.
            </p>
            <div className="techs">
            <Image src="/assets/react.svg" alt="React" width={40} height={40} />
            <Image src="/assets/nextjs.png" alt="Next.js" width={30} height={30} />
            <Image src="/assets/tailwindcss.png" alt="TailwindCSS" width={40} height={40} />
            </div>
            <p>
            *Desenvolvendo responsividade para mobile
            </p>
            <a href="https://github.com/DavidLucasK/Spotify-Layout" target="_blank" rel="noopener noreferrer">Acessar Git</a>
        </div>
        </li>
      </ul>
    </section>
  );
}