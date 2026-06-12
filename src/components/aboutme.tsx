import { Box, Typography } from "@mui/material";

function About() {
  return (
    <Box sx={{ padding: "10px", backgroundColor: "#f5f5f5" }}>
      <Typography>
        Former pre school teacher turned developer. For a year I have taught
        myself front and backend web development through various resources with
        the main being The Odin Project. I enjoy organizing code and making HTML
        look pretty and responsive.
      </Typography>
      <Typography>
        I have a personal blog that is a mod podge collection of my journey as
        well as my tech knowledge which can be found here.
      </Typography>
      <Typography>
        Currently I am reading: Designing Data Intensive Applications
      </Typography>
    </Box>
  );
}

export default About;
