import { Box } from "@mui/material";
import Project from "./projComp";

import Feed from "../bunieIMGS/feed.png";
import Profile from "../bunieIMGS/profile.png";
import Settings from "../bunieIMGS/set.png";
import Pass from "../bunieIMGS/pass.png";
import Wrongpass from "../bunieIMGS/wrongpass.png";
import Edit from "../bunieIMGS/edit.png";
import Comment from "../bunieIMGS/comment.png";
import Inven from "../bunieIMGS/inven.png";

import Analytics from "../SANIMGS/analytics.png";
import Audit from "../SANIMGS/audit.png";
import CaseReport from "../SANIMGS/caseReport.png";
import Exports from "../SANIMGS/exports.png";

// BUNIE \\
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

const bunieTech = [
  "PostgreSQL used for relations between users, posts, followers, and product upload with Prisma as my ORM",
  "Unit tests with Jest",
  "Authentication with Passport and other middleware",
  "Typescript",
  "Tanstack for caching infinite scrolling",
];

// SAN \\

const sanIMGS = [CaseReport, Exports, Analytics, Audit];

const sanTech = [
  "Reduced client report generation time from 30+ minutes to 3-5 seconds via pre-synced, pre-cleaned data and indexing of database",
  "Integrated Microsoft Azure AD SSO with role-based permissions",
  "Implemented complex SQL queries based on client's needs for month-to-month reporting, auditing/legal purposes, and grant appliction requirements",
  "Developed React + TypeScript application with TanStack Query, Material-UI, for a robust, user friendly front end",
  "Client-side CSV/Excel/ generation",
  "Comprehensive audit trail logging all user actions with timestamps for compliance tracking",
  "CI/CD deployment pipeline with GitHub Actions, and environment-based configs",
];

function Projects() {

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "40px",
      }}
    >
      <Project
        title="Bunie. 🐰"
        description1="A semi-social media cosmetics tracking app."
        description2="Track your cosmetic inventory and usage with Bunie and share your collection with others."
        tech={bunieTech}
        pics={bunieIMGS}
      />
      <Project
        title="Report builder for a non profit organization (Digital Aid Seattle)"
        description1="Fullstack application for legal case management that syncs data from one database (MyCase) to another (Azure)"
        description2={null}
        tech={sanTech}
        pics={sanIMGS}
      />
    </Box>
  );
}

export default Projects;
