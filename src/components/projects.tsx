import { Box, Typography } from "@mui/material";
import ImgCarousel from "./imgCarousel";

import Feed from "../bunieIMGS/feed.png";
import Profile from "../bunieIMGS/profile.png";
import Settings from "../bunieIMGS/set.png";
import Pass from "../bunieIMGS/pass.png";
import Wrongpass from "../bunieIMGS/wrongpass.png";
import Edit from "../bunieIMGS/edit.png";
import Comment from "../bunieIMGS/comment.png";
import Inven from "../bunieIMGS/inven.png";

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
