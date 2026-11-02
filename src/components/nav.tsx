import { useState } from "react";
import { Link } from "react-router-dom";
import ButtonOutline from "./buttonOutline";
import Github from "../imgs/github.svg";
import Linkedin from "../imgs/linkedin.svg";
import Email from "../imgs/email.svg";
import Navigation from "../imgs/navigation.png";

const navOpts = [
  { title: "Home", link: "/#home" },
  { title: "About", link: "/#about" },
  { title: "Portfolio", link: "/#portfolio" },
  { title: "Resume", link: "/resume" },
  { title: "Contact", link: "/#contact" },
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
          text={open ? "X" : undefined}
          image={open ? undefined : Navigation}
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
              {navOpts.map((opt) => (
                <a
                  key={opt.title}
                  href={opt.link}
                  onClick={() => setOpen(false)}
                >
                  {opt.title}
                </a>
              ))}
            </div>
            <div className="contactLinks">
              {contact.map((opt) => (
                <ButtonOutline
                  key={opt.name}
                  image={opt.image}
                  url={opt.link}
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
