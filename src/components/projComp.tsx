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
    <Box
      sx={{
        display: "Flex",
        flexDirection: "column",
        gap: "30px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
          justifyContent: "space-between",
          width: "50%",
        }}
      >
        <Typography
          sx={{
            fontSize: "1.3rem",
          }}
        >
          {title}
        </Typography>
        <Box onClick={() => setOpen((prev) => !prev)}>
          <img
            style={{
              width: "40px",
              cursor: "pointer",
            }}
            src={!open ? Open : Close}
            alt={!open ? "open project" : "close project"}
          />
        </Box>
      </Box>
      {open && (
        <Box>
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
        </Box>
      )}
    </Box>
  );
}

export default Project;
