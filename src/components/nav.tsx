import { useState } from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import ButtonOutline from "./buttonOutline";

import Github from "../imgs/github.svg";
import Linkedin from "../imgs/linkedin.svg";

import Choice from "./choice";

const navOpts = [
  { title: "Home", link: "/home" },
  { title: "About", link: "/about" },
  { title: "Portfolio", link: "/portfolio" },
  { title: "Resume", link: "/resume" },
  { title: "Contact", link: "/contact" },
];

const socials = [
  { name: "github", image: Github, link: "https://github.com/menamina" },
  {
    name: "linkedin",
    image: Linkedin,
    link: "https://www.linkedin.com/in/damenajackson/",
  },
];

function Nav() {
  const [navStatus, setNavStatus] = useState<boolean>(false);
  const [view, setView] = useState<string>("");

  return (
    <div>
      <div>
        <div>Mena</div>

        <ButtonOutline
          text={navStatus ? "close" : "open"}
          onClick={() => setNavStatus(!navStatus)}
        />
      </div>
      {navStatus && (
        <div
          className="navOpened"
          onClick={(e) => {
            (setNavStatus(false), e.stopPropagation());
          }}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <div>
              {navOpts.map((item) => (
                <Choice key={item} title={item} viewSet={setView} view={view} />
              ))}
            </div>
          </div>
          <div>
            {socials.map((social) => (
              <ButtonOutline
                key={social.name}
                image={social.image}
                url={social.link}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Nav;
