import { useState } from "react";
import { Link } from "react-router-dom";
import ButtonOutline from "./buttonOutline";
import Github from "../imgs/github.svg";
import Linkedin from "../imgs/linkedin.svg";
import Email from "../imgs/email.svg";

const navOpts = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Portfolio", link: "/portfolio" },
  { title: "Resume", link: "/resume" },
  { title: "Contact", link: "/contact" },
];

const contact = [
  { name: "GitHub", image: Github, link: "https://github.com/menamina" },
  {
    name: "LinkedIn",
    image: Linkedin,
    link: "https://www.linkedin.com/in/damenajackson/",
  },
  { name: "Email", image: Email, link: "mailto:dayjacs03@gmail.com" },
];

function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="nav-inner">
        <Link to="/" className="logo">
          Mena
        </Link>

        <ButtonOutline
          className="menu-btn"
          onClick={() => setOpen(!open)}
          text="x"
        />
      </div>
      {open && (
        <div
          className="fixedNavBackground"
          onClick={(e) => {
            (setOpen(false), e.stopPropagation());
          }}
        >
          <nav className="openedNav" onClick={(e) => e.stopPropagation()}>
            <div className="webPages">
              {navOpts.map((item) => (
                <Link
                  key={item.title}
                  to={item.link}
                  onClick={() => setOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </div>
            <div className="contactLinks">
              {contact.map((item) => (
                <ButtonOutline
                  key={item.name}
                  image={item.image}
                  url={item.link}
                />
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Nav;
