import { Box, Typography } from "@mui/material";

function About() {
  return (
    <Box sx={{}}>
      <Typography>
        I'm Mena, a teacher turned developer. Over a year ago I got introduced
        to the world of web development through a friend. What was initially
        just for fun HTML/CSS tutorial turned into a joy of developing websites.
        I am now over a year later switching careers with React, TypeScript,
        Tanstack Query, FastAPI/Pydantic, Node.js and more under my belt.
      </Typography>
      <br></br>
      <Typography>
        I'm currently a Full Stack Software Engineer at{" "}
        <a>Digital Aid Seattle</a>, where I work with a team of project managers
        and developers to provide digital solutions to non-profit companies. I
        enjoy the process of figuring out how to bring to life the needs of a
        business while meeting the needs of the end users and clients.
      </Typography>
    </Box>
  );
}

export default About;
