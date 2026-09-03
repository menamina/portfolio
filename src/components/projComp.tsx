import { Typography } from "@mui/material";

function Project({ title, description1, description2 = null, tech, pics }) {
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
        
      </Box>
      {tech.map((item, index) => (
        <li key={index}>{item}</li>
      ))}

      <ImgCarousel imgs={pics} />
    </Box>
    </Box>
  );
}

export default Project;
