import aboutcss from '../css/about.css'; // Está sendo usado sim!
import aboutleftcss from '../css/aboutleft.css'; // Está sendo usado sim!
import aboutrightcss from '../css/aboutright.css'; // Está sendo usado sim!

import AboutLeft from './AboutLeft';
import AboutRight from './AboutRight';

export default function About() {
  return (
    <section id="about" className="about">
      <AboutLeft />
      <AboutRight />
    </section>
  );
}
