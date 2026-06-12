import { Box } from "@mui/material";
import Res from "../imgs/resume.png";
import Download from "../imgs/download.svg";
import ResPDF from "../imgs/resume.pdf";

import { useState } from "react";

function Resume() {
  const [enlarge, setEnlarge] = useState<boolean>(false);

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          ...(enlarge && { position: "relative" }),
          "& a:hover": {
            transform: "scale(1.1)",
            boxShadow: "0px 20px 30px 0px gray",
          },
          "& img:hover": {
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
        <img
          style={{ width: "100%" }}
          src={Res}
          alt="mena's resume"
          onClick={() => setEnlarge(true)}
        />
      </Box>

      {enlarge && (
        <Box sx={{ position: "absolute" }}>
          <button type="button" onClick={() => setEnlarge(false)}>
            X
          </button>
          <img
            src={Res}
            alt="mena's resume enlarge"
            style={{ width: "80vw", height: "80vh" }}
          />
        </Box>
      )}
    </Box>
  );
}

export default Resume;
