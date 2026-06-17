import { Box } from "@mui/material";
import Res from "../imgs/resume.png";
import Download from "../imgs/download.svg";
import ResPDF from "../imgs/resume.pdf";

function Resume() {
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          "& a:hover": {
            transform: "scale(1.1)",
            boxShadow: "0px 20px 30px 0px gray",
          },
          "& > img:hover": {
            filter: "blur(1px)",
          },
        }}
      >
        <a
          href={ResPDF}
          download="Damena_Jackson_Resume.pdf"
          style={{ alignSelf: "flex-end" }}
        >
          <img style={{ width: "30px" }} src={Download} alt="download image" />
        </a>
        <img style={{ width: "100%" }} src={Res} alt="mena's resume" />
      </Box>
    </Box>
  );
}

export default Resume;
