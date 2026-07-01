import { Box, Typography } from "@mui/material";
import ImgCarousel from "./imgCarousel";

import Feed from "../appIMGS/feed.png";
import Profile from "../appIMGS/profile.png";
import Settings from "../appIMGS/set.png";
import Pass from "../appIMGS/pass.png";
import Wrongpass from "../appIMGS/wrongpass.png";
import Edit from "../appIMGS/edit.png";
import Comment from "../appIMGS/comment.png";
import Inven from "../appIMGS/inven.png";

function Projects() {
  const bunieIMGS = [
    Feed,
    Profile,
    Settings,
    Pass,
    Wrongpass,
    Edit,
    Comment,
    Inven,
  ];

  return (
    <Box sx={{ width: "100%" }}>
      <Typography>Bunie. 🐰</Typography>
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

      <ImgCarousel imgs={bunieIMGS} />
    </Box>
  );
}

export default Projects;
