import { Box } from "@mui/material";
import Res from "../imgs/techresume.png";
import Download from "../imgs/download.svg";
import ResPDF from "../imgs/techresume.pdf";

function Resume() {
  return (
    <Box
      sx={{
        width: "1200px",
        justifySelf: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          paddingTop: "30px",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <a
          href={ResPDF}
          download="Damena_Jackson_Resume.pdf"
          style={{ alignSelf: "flex-end" }}
        >
          <img
            style={{ width: "50px", marginRight: "15px" }}
            src={Download}
            alt="download image"
          />
        </a>
        <img style={{ width: "80%" }} src={Res} alt="mena's resume" />
      </Box>
    </Box>
  );
}

export default Resume;
