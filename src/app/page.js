import Navbar from "./components/Navbar";
import navbarcss from "./components/css/navbar.css";

import Header from "./components/Header"
import headercss from "./components/css/header.css";

import About from "./components/About"
import aboutcss from "./components/css/about.css";

export default function Home() {
  return (
    <main>
      <Navbar className={navbarcss.Navbar}/>
      <Header className={headercss.Header}/>
      <About className={aboutcss.About}/>
    </main>
  );
}
