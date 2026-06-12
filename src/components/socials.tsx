import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Github from "../imgs/github.svg";
import Linkedin from "../imgs/linkedin.svg";
import Blog from "../imgs/blog.svg";

const imgcss = {
  width: "50px",
};

function Contact() {
  return (
    <Box className="contactDIV">
      <Typography>
        If you want to get a hold of me choice of method is yours
      </Typography>
      <Box>
        <Box
          className="linksToContact"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            "& a:visited": { color: "black" },
            "& a": { color: "black", textDecoration: "none" },
          }}
        >
          <Link
            to="https://github.com/menamina"
            style={{ display: "flex", gap: "20px" }}
          >
            <img src={Github} alt="github" style={imgcss}></img>
            <Typography>Github</Typography>
          </Link>
          <Link
            to="https://www.linkedin.com/in/damenajackson/"
            style={{ display: "flex", gap: "20px" }}
          >
            <img src={Linkedin} alt="mena's linkedin" style={imgcss}></img>
            <Typography>Linkedin</Typography>
          </Link>
          <Link
            to="https://personall.com"
            style={{ display: "flex", gap: "20px" }}
          >
            <img src={Blog} alt="" style={imgcss} />
            <Typography>my personal site</Typography>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default Contact;
