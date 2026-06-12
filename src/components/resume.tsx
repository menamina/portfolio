import { Box, Typography } from "@mui/material";
import Res from "../imgs/resume.png";

function Resume() {
  return (
    <Box>
      <Box sx={{}}>
        <a href="../imgs/resume.pdf" download="Damena_Jackson_Resume.pdf">
          <img />
        </a>
        <img style={{ width: "100%" }} src={Res} alt="mena's resume" />
      </Box>
    </Box>
  );
}

export default Resume;
