import { Box } from "@mui/material";
import Blurb from "./aboutme";

function Choice({
  title,
  viewSet,
  view,
}: {
  title: string;
  viewSet: any;
  view: string;
}) {
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
        {title === view ? (
          <li
            style={{
              fontSize: "1.2rem",
              transform: "scale(1.1)",
            }}
            onClick={viewSet}
          >
            {title}
          </li>
        ) : (
          <li
            style={{ fontSize: "1.2rem" }}
            onClick={() => (view === title ? viewSet("") : viewSet(title))}
          >
            {title}
          </li>
        )}
      </Box>
    </>
  );
}

export default Choice;
