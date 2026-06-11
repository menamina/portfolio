import { Box } from "@mui/material";
import { useOutletContext } from "react-router-dom";
import Blurb from "./blurb";

function Selection({ title }: { title: string }) {
  const { view } = useOutletContext<{ view: string }>();
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

      {view === title ? <Blurb view={title}></Blurb> : null}
    </>
  );
}

export default Selection;
