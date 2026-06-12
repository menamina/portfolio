import { Box, Typography } from "@mui/material";

function Projects() {
  return (
    <Box sx={{}}>
      <Typography>Bunie.</Typography>
      <Typography>A semi-social media cosmetics tracking app.</Typography>
      <Typography>
        Track your cosmetic inventory and usage with Bunie and share your
        collection with others.
      </Typography>
      <Typography>Build:</Typography>
      <Box
        component="ul"
        sx={{
          "& li::marker": {
            content: '"☆ "',
          },
        }}
      >
        <li>
          PostgreSQL used for relations between users, posts, followers, and
          product upload with Prisma as my ORM
        </li>
        <li>Unit tests with Jest</li>
        <li>Authentication with Passport and other middleware</li>
        <li>Typescript</li>
        <li>Tanstack for caching infinite scrolling</li>
      </Box>
    </Box>
  );
}

export default Projects;
