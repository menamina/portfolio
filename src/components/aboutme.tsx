import { Box, Typography } from "@mui/material";

function About() {
  return (
    <Box sx={{}}>
      <Typography>
        I'm Mena, teacher turned developer. Over a year ago I got introduced to
        the world of web development through a friend. What was initially just a
        for fun HTLM/CSS tutorial turned into a joy of developing websites. And
        here I am over a year later switching careers with React, TypeScript,
        Tanstack Query, FastAPI/Pydantic, Node.js and more under my belt.
        {/* I am
        working on a full team of project managers as well as other developers
        to prodive digital solutions to non profit companies.  */}
      </Typography>
      <br></br>
      <Typography>
        I currently volunteer at a company called <a>Digital Aid Seattle</a> as
        a full stack javascript web developer. Although the work is unpaid, what
        we do and how we operate week to week is no different from a job. I
        enjoy the process of figuring out how to bring to life the needs and
        wants of others because it challenges me to think about implementation
        in different ways.
      </Typography>
    </Box>
  );
}

export default About;
