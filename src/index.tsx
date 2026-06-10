import { Container, Box, Grid, Typography, CssBaseline } from "@mui/material";
import Img from "./imgs/one.jpg";
import Fakeheadshot from "./imgs/two.jpg";

const underlines = {
  width: "300px",
  borderBottom: "1px solid #d3d1cb",
  padding: "8px",
};

function App() {
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
          <Box sx={{ width: "inherit" }}>
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
            <Box>
              <Typography variant="h5">Overview</Typography>
              <Box sx={underlines}></Box>
            </Box>
            <Box>
              <Typography variant="h5">Portfolio</Typography>
              <Box sx={underlines}></Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default App;
