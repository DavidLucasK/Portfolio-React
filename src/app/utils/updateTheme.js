export default function updateTheme(darkMode) {
  const body = document.body;
  const mobileLinks = document.querySelector('.mobile__links');
  const header = document.querySelector('header');
  const about = document.querySelector('.about');
  const skills = document.querySelector('.skills');
  const skillsContent = document.querySelector('.skills .skills__content');
  const frontend = document.querySelector('.frontend');
  const backend = document.querySelector('.backend');
  const mobile = document.querySelector('.mobile');
  const projects = document.querySelector('.projects');

  if (darkMode) {
    body.classList.add('dark-theme');
    if (mobileLinks) 
    {
      mobileLinks.style.backgroundColor = 'red';
    }
    header.classList.add('dark-theme');
    about.classList.add('dark-theme');
    skills.classList.add('dark-theme');
    skillsContent.classList.add('dark-theme');
    frontend.classList.add('dark-theme');
    backend.classList.add('dark-theme');
    mobile.classList.add('dark-theme');
    projects.classList.add('dark-theme');
  } else {
    body.classList.remove('dark-theme');
    if (mobileLinks) mobileLinks.classList.remove('dark-theme');
    header.classList.remove('dark-theme');
    about.classList.remove('dark-theme');
    skills.classList.remove('dark-theme');
    skillsContent.classList.remove('dark-theme');
    frontend.classList.remove('dark-theme');
    backend.classList.remove('dark-theme');
    mobile.classList.remove('dark-theme');
    projects.classList.remove('dark-theme');
  }
}
