import { Container, Box, Grid } from "@mui/material";
import Img from "./imgs/one.jpg";
import "./global.css";

function App() {
  return (
    <Box sx={{ overflowX: "hidden" }}>
      <Box sx={{ height: "100px" }}>
        <img style={{ height: "100%", object-fit: cover }} src={Img} alt="header image of green lilly pads" />
      </Box>
    </Box>
  );
}

export default App;
