import './App.css';
import Navbar from './sections/Navbar';
import MobileMenu from './sections/MobileMenu';
import About from './sections/About';
import Skills from './sections/Skills';
import { useState } from "react";

function App() {
  // arr of objects that will be used to create the links
  const links = [
    {linkName: "About", link: "#About", letter: "A", target: "_self"},
    {linkName: "Projects", link: "#Projects", letter: "B", target: "_self"},
    {linkName: "Skills", link: "#Skills", letter: "X", target: "_self"},
    {linkName: "Github", link: "https://github.com/Michaelcoav", letter: "Y", target: "_blank"},
    // {linkName: "Contact", link: "#Contact", letter: "Y", target: "_self"}
  ];

  // used to determine whether the overlay is being used
  const [overlay, setOverlay] = useState(false);

  return (
    <div>
      <Navbar links={links} overlay={overlay} setOverlay={setOverlay} />

      {/** if overlay is true then display mobile menu */}
      {overlay && <MobileMenu links={links} setOverlay={setOverlay} />}

      <About />
      <Skills />
    </div>
  );
}

export default App;
