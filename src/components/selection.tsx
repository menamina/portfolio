import { Container, Box, Grid, Typography, CssBaseline } from "@mui/material";

function Selection({ title, view }: { title: string; view: "string" }) {
  return (
    <>
      <Box
        component="ul"
        sx={{
          "& li::marker": {
            content: '"☆ "',
          },

          "& li": {
            transition: "transform 0.3s ease",
            cursor: "pointer",
          },

          "& li:hover": {
            transform: "scale(1.1)",
            transition: "transform .3s ease",
          },
        }}
      >
        <li style={{ fontSize: "1.2rem" }}>{title}</li>
      </Box>
      {}
    </>
  );
}

export default Selection;
