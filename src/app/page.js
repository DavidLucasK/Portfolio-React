import Navbar from "./components/Navbar";
import Header from "./components/Header"
import About from "./components/About"
import Companys from "./components/Companys"
import Skills from "./components/Skills";
import Frontend from "./components/Frontend";
import Backend from "./components/Backend";
import Mobile from "./components/Mobile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Header/>
      <About/>
      <Companys/>
      <Skills/>
      <Frontend/>
      <Backend/>
      <Mobile/>
      <Projects/>
      <Footer/>
    </main>
  );
}
