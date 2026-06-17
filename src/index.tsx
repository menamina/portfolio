import { Container, Box, Typography, CssBaseline } from "@mui/material";
import { useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "./imgs/one.jpg";
import Fakeheadshot from "./imgs/two.jpg";

import Choice from "./components/choice";
import About from "./components/aboutme";
import Contact from "./components/contact";
import Projects from "./components/projects";
import Resume from "./components/resume";
import Socials from "./components/socials";

const underlines = {
  width: "100%",
  borderBottom: "1px solid #d3d1cb",
  padding: "8px",
};

const left = ["about me", "contact me"];
const right = ["projects", "resume", "socials"];

function App() {
  const [view, setView] = useState<string>("");
  return (
    <>
      <CssBaseline />
      <Box sx={{ width: "100%", height: "100%" }}>
        <Box sx={{ height: "175px", overflow: "hidden" }}>
          <img
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
            }}
            src={Header}
            alt="header image of green lilly pads"
          />
        </Box>

        <Container
          className="HELLLOOO?"
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            gap: "50px",
            flexDirection: { xs: "column", md: "row" },
            paddingTop: "50px",
            paddingBottom: "75px",
          }}
        >
          <Box
            className="hello?"
            sx={{
              width: { xs: "100%", sm: "100%", md: "50%" },
              "& > div": {
                display: "flex",
                gap: "25px",
                flexDirection: "column",
                alignItems: "center",
              },
              "& > div:last-child": {
                flexDirection: "row",
              },
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <img
                src={Fakeheadshot}
                alt="Mena Jackson picture"
                style={{
                  height: "300px",
                  width: "300px",
                  objectFit: "cover",
                  borderRadius: "100%",
                }}
              />
            </Box>
            <Box>
              <Typography variant="h3">Mena Jackson. </Typography>
              <Typography variant="h6">
                <br></br> Full stack web developer bringing visions to life
                <br></br> one line at a time.
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "40px",
                paddingTop: "30px",
                height: "260px",
              }}
            >
              <Box
                sx={{
                  width: "50%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <Typography variant="h5">Overview</Typography>
                <Box sx={underlines}></Box>
                {left.map((item) => (
                  <Choice title={item} viewSet={setView} view={view}></Choice>
                ))}
              </Box>
              <Box
                sx={{
                  width: "50%",
                  display: "flex",
                  flexDirection: "column",

                  alignItems: "center",
                  height: "100%",
                }}
              >
                <Typography variant="h5">Portfolio</Typography>
                <Box sx={underlines}></Box>
                {right.map((item) => (
                  <Choice title={item} viewSet={setView} view={view}></Choice>
                ))}
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {view === "about me" && <About></About>}
            {view === "contact me" && <Contact></Contact>}
            {view === "projects" && <Projects></Projects>}
            {view === "resume" && <Resume></Resume>}
            {view === "socials" && <Socials></Socials>}
          </Box>

          <Outlet context={{ view }} />
        </Container>
      </Box>
    </>
  );
}

export default App;
