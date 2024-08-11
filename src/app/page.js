'use client'

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Companys from "./components/Companys";
import Skills from "./components/Skills";
import Frontend from "./components/Frontend";
import Backend from "./components/Backend";
import Mobile from "./components/Mobile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { useState } from 'react';

export default function Home() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(prevTheme => !prevTheme);
  };

  return (
    <main>
      <Navbar isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
      <Header />
      <About />
      <Companys isDarkTheme={isDarkTheme} />
      <Skills />
      <Frontend />
      <Backend />
      <Mobile />
      <Projects />
      <Footer />
    </main>
  );
}
