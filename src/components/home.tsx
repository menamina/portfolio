import { Container, Box, Typography, CssBaseline } from "@mui/material";
import ButtonOutline from "./buttonOutline";
import Me from "../imgs/mena.png";

function Home() {
  return (
    <div>
      <div>
        <img src="" alt="" />
        <p></p>
      </div>
      <div>
        <h1></h1>
      </div>
      <div>
        <h3></h3>
      </div>
      <div>
        <ButtonOutline />
      </div>
      <div>
        <div>
          <div>
            <p>Looking for work</p>
            <p>Looking for work</p>
          </div>
        </div>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <img
            src={Me}
            alt="Mena Jackson picture"
            style={{
              height: "300px",
              width: "300px",
              objectFit: "cover",
              borderRadius: "100%",
            }}
          />
        </Box>
      </div>
    </div>
  );
}

export default Home;
