import { useState } from "react";
import { Typography, Box } from "@mui/material";
import ImgCarousel from "./imgCarousel";

import Open from "../imgs/down.svg";
import Close from "../imgs/down.svg";

type Project = {
  title: string;
  description1: string;
  description2: string | null;
  tech: string[];
  pics: string[];
};

function Project({
  title,
  description1,
  description2 = null,
  tech,
  pics,
}: Project) {
  const [open, setOpen] = useState(false);

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          gap: "20px",
        }}
      >
        <Typography>{title}</Typography>
        <Box onClick={() => setOpen((prev) => !prev)}>
          <img
            style={{
              width: "100px",
            }}
            src={!open ? Open : Close}
            alt={!open ? "open project" : "close project"}
          />
        </Box>
      </Box>
      {open && (
        <>
          <Typography>{description1}</Typography>
          {description2 && <Typography>{description2}</Typography>}
          <Typography>Build:</Typography>
          <Box
            component="ul"
            sx={{
              "& li::marker": {
                content: '"☆ "',
              },
            }}
          >
            {tech.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </Box>

          <ImgCarousel imgs={pics} />
        </>
      )}
    </Box>
  );
}

export default Project;
