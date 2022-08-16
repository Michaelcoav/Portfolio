import './App.css';
import Navbar from './sections/Navbar';
import MobileMenu from './sections/MobileMenu';
import { useState } from "react";

function App() {
  // arr of objects that will be used to create the links
  const links = [
    {linkName: "Projects", link: "#Projects", letter: "A", target: "_self"},
    {linkName: "Skills", link: "#Skills", letter: "B", target: "_self"},
    {linkName: "Github", link: "https://github.com/Michaelcoav", letter: "X", target: "_blank"},
    {linkName: "Contact", link: "#Contact", letter: "Y", target: "_self"}
  ];

  // used to determine whether the overlay is being used
  const [overlay, setOverlay] = useState(false);

  return (
    <div>
      {/** make the overlay counter here if its false diplay navbar otherwise mobile menu */}
      <Navbar links={links} overlay={overlay} setOverlay={setOverlay} />

      {overlay && <MobileMenu links={links} setOverlay={setOverlay} />}
    </div>
  );
}

export default App;
