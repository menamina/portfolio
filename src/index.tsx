import { Container, Box, Grid, Typography, CssBaseline } from "@mui/material";
import Img from "./imgs/one.jpg";
import Fakeheadshot from "./imgs/two.jpg";

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

        <Container sx={{ width: "100%", bgcolor: "yellow" }}>
          <Box sx={{ width: "inherit" }}>
            <img
              src={Fakeheadshot}
              alt="Mena Jackson picture"
              style={{ height: "100%", width: "400px", objectFit: "cover" }}
            />
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default App;
