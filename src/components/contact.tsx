import { Box, Typography } from "@mui/material";
import Email from "../imgs/email.svg";

const imgcss = {
  width: "50px",
};

function Contact() {
  return (
    <Box>
      <Typography>Email me!</Typography>

      <Box
        sx={{
          display: "flex",
          gap: "15px",
          "& a:visited": { color: "black" },
          "& a": { color: "black", textDecoration: "none" },
        }}
      >
        <img src={Email} alt="email image" style={imgcss} />
        <Typography>dayjacs03@gmail.com</Typography>
      </Box>
    </Box>
  );
}

export default Contact;
