import { Container, Box, Typography, CssBaseline } from "@mui/material";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Img from "./imgs/one.jpg";
import Fakeheadshot from "./imgs/two.jpg";
import Choice from "./components/choice";
import About from "./components/aboutme";

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
        <Box
          sx={{ height: "300px", backgroundColor: "green", overflow: "hidden" }}
        >
          <img
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
            }}
            src={Img}
            alt="header image of green lilly pads"
          />
        </Box>

        <Container
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            paddingBottom: "75px",
          }}
        >
          <Box sx={{ width: "50%" }}>
            <Box sx={{ width: "100%" }}>
              <img
                src={Fakeheadshot}
                alt="Mena Jackson picture"
                style={{
                  height: "400px",
                  width: "400px",
                  objectFit: "cover",
                  borderRadius: "100%",
                }}
              />
            </Box>
            <Typography>
              <Typography variant="h3">Mena Jackson. </Typography>
              <Typography variant="h6">
                <br></br> Full stack web developer bringing visions to life
                <br></br> one line at a time.
              </Typography>
            </Typography>
            <Box sx={{ display: "flex", gap: "40px" }}>
              <Box sx={{ width: "50%" }}>
                <Typography variant="h5">Overview</Typography>
                <Box sx={underlines}></Box>
                {left.map((item) => (
                  <Choice title={item} viewSet={setView} view={view}></Choice>
                ))}
              </Box>
              <Box sx={{ width: "50%" }}>
                <Typography variant="h5">Portfolio</Typography>
                <Box sx={underlines}></Box>
                {right.map((item) => (
                  <Choice title={item} viewSet={setView} view={view}></Choice>
                ))}
              </Box>
            </Box>
          </Box>
          <Box>
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
