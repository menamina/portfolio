import { Typography, Box } from "@mui/material";
import ImgCarousel from "./imgCarousel";

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
  return (
    <Box>
      <Typography>{title}</Typography>
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
  );
}

export default Project;
