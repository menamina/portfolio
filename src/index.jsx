import { Link } from "react-router-dom";
import { useState } from "react";

function App() {
  const [about, setAbout] = useState(false);

  function toggleAboutSection() {
    setAbout((prev) => !prev);
  }

  return (
    <div className="mainDIV">
      <div className="nav">
        <div>MENA</div>
        <div>
          <Link to="/projects">PROJECTS</Link>
          <Link to="/contact">CONTACT</Link>
        </div>
      </div>
      <div className="hero">
        <div className="LHero">
          <div>
            <img></img>
            <div className="contact">
              <div onClick={toggleAboutSection}>Who I am</div>
              {about && (
                <div>
                  <div></div>
                </div>
              )}
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
        <div className="RHero"></div>
      </div>
    </div>
  );
}

export default App;
