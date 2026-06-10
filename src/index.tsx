import { Container, Box, Grid, Typography, CssBaseline } from "@mui/material";
import Img from "./imgs/one.jpg";
import Fakeheadshot from "./imgs/two.jpg";

function App() {
  return (
    <>
      <CssBaseline />
      <Box sx={{ overflowX: "hidden" }}>
        <Box sx={{ height: "300px", backgroundColor: "green" }}>
          <img
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
            src={Img}
            alt="header image of green lilly pads"
          />
        </Box>

        <Container>
          <Box>
            <img src={Fakeheadshot} alt="Mena Jackson picture" />
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default App;
